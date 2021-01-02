import {
  LambdaClient,
  GetFunctionConfigurationCommand,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionConfigurationCommandInput,
  InvokeCommand,
  InvokeCommandInput,
} from "@aws-sdk/client-lambda";
import {
  XRayClient,
  GetTraceSummariesCommand,
  GetTraceSummariesCommandInput,
  BatchGetTracesCommand,
  BatchGetTracesCommandInput,
  TraceSummary,
  Trace,
} from "@aws-sdk/client-xray";
import * as fs from "fs";

import * as pkg from "../package.json";

const chartistSvg = require("svg-chartist");

const COLD_STARTS = 50;
const WARM_STARTS = 3;

const { BENCHMARK_SUFFIX, DRY_RUN } = process.env;
const STACK_NAME = BENCHMARK_SUFFIX ? `${pkg.name}-${BENCHMARK_SUFFIX}` : pkg.name;

interface MemoryTimes {
  memorySize: number;
  times: ProcessedTimes;
}

interface ProcessedTimes {
  overallTimes: OverallTime;
  traceTimes: TraceTime[];
}

interface OverallTime {
  avgWarmMs: number | undefined;
  avgColdMs: number | undefined;
  fastestWarmMs: number | undefined;
  fastestColdMs: number | undefined;
  slowestWarmMs: number | undefined;
  slowestColdMs: number | undefined;
}

interface TraceTime {
  id: string | undefined;
  totalTime: number | undefined;
  initTime: number | undefined;
  invocTime: number | undefined;
  overheadTime: number | undefined;
}

/**
 * Sleep for the specified time.
 */
const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * Split an array into chunks based on the `size`.
 */
const chunkArray = (arr: any[], size: number) => {
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
};

/**
 * Process a list of XRay detailed traces, extracting the times for the various
 * segments, along with overall metrics.
 */
const processXRayTraces = (traces: Trace[]): ProcessedTimes => {
  console.log("[TRACES] Processing trace information.");
  // Gather overall metrics.
  let avgWarmMs: number | undefined;
  let avgColdMs: number | undefined;
  let fastestWarmMs: number | undefined;
  let fastestColdMs: number | undefined;
  let slowestWarmMs: number | undefined;
  let slowestColdMs: number | undefined;

  // Gather per-trace metrics.
  const traceTimes: TraceTime[] = [];
  traces.map((trace) => {
    let totalTime: number | undefined;
    let initTime: number | undefined;
    let invocTime: number | undefined;
    let overheadTime: number | undefined;

    // Piece together the segment timings into one measurement.
    trace.Segments?.filter((s) => s.Document !== undefined).map((segment) => {
      const seg = JSON.parse(segment.Document!);
      if (seg.origin === "AWS::Lambda") {
        totalTime = seg.end_time - seg.start_time;
      } else if (seg.origin === "AWS::Lambda::Function") {
        seg.subsegments?.map((subSeg: any) => {
          if (subSeg.name === "Initialization") {
            initTime = subSeg.end_time - subSeg.start_time;
          } else if (subSeg.name === "Invocation") {
            invocTime = subSeg.end_time - subSeg.start_time;
          } else if (subSeg.name === "Overhead") {
            overheadTime = subSeg.end_time - subSeg.start_time;
          }
        });
      }
    });

    const isColdStart = initTime ? true : false;

    // Validate that the trace.
    const otherTime = (initTime || 0) + (invocTime || 0) + (overheadTime || 0);
    if (totalTime! < otherTime) {
      console.error(
        `[TRACES] Invalid trace with total time '${totalTime}' less than sum of other times '${otherTime}'. ID = ${trace.Id}.`
      );
      return;
    }
    traceTimes.push({
      id: trace.Id,
      totalTime,
      initTime,
      invocTime,
      overheadTime,
    });

    if (!isColdStart) {
      avgWarmMs = !avgWarmMs ? totalTime : (avgWarmMs + totalTime!) / 2;
      fastestWarmMs = !fastestWarmMs || totalTime! < fastestWarmMs ? totalTime : fastestWarmMs;
      slowestWarmMs = !slowestWarmMs || totalTime! > slowestWarmMs ? totalTime : slowestWarmMs;
    }
    if (isColdStart) {
      avgColdMs = !avgColdMs ? totalTime : (avgColdMs + totalTime!) / 2;
      fastestColdMs = !fastestColdMs || totalTime! < fastestColdMs ? totalTime : fastestColdMs;
      slowestColdMs = !slowestColdMs || totalTime! > slowestColdMs ? totalTime : slowestColdMs;
    }
  });

  return {
    overallTimes: {
      avgWarmMs,
      avgColdMs,
      fastestWarmMs,
      slowestWarmMs,
      fastestColdMs,
      slowestColdMs,
    },
    traceTimes,
  };
};

const outputBenchmarkMarkdown = async (memoryTimes: MemoryTimes[]) => {
  console.log("[OUTPUT] Saving benchmark times to 'response-times.md'.");

  let mdOutput = "";
  memoryTimes.map(({ memorySize, times }) => {
    mdOutput += `

## Results for ${memorySize} MB`;
    mdOutput += `

| Measurement (${memorySize} MB) | Time (ms) |
|-------------|------|
| Average warm start response time | ${Math.floor(times.overallTimes.avgWarmMs! * 10000) / 10} ms |
| Average cold start response time | ${Math.floor(times.overallTimes.avgColdMs! * 10000) / 10} ms |
| Fastest warm response time | ${Math.floor(times.overallTimes.fastestWarmMs! * 10000) / 10} ms |
| Slowest warm response time | ${Math.floor(times.overallTimes.slowestWarmMs! * 10000) / 10} ms |
| Fastest cold response time  | ${Math.floor(times.overallTimes.fastestColdMs! * 10000) / 10} ms |
| Slowest cold response time | ${Math.floor(times.overallTimes.slowestColdMs! * 10000) / 10} ms |
  `;

    mdOutput += `

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|`;
    times.traceTimes.map((time) => {
      const isColdStart = !!time.initTime;
      const totalTimeMs = time.totalTime ? `${Math.floor(time.totalTime * 10000) / 10} ms` : "";
      const initTimeMs = time.initTime ? `${Math.floor(time.initTime * 10000) / 10} ms` : "";
      const invocTimeMs = time.invocTime ? `${Math.floor(time.invocTime * 10000) / 10} ms` : "";
      const overheadTimeMs = time.overheadTime ? `${Math.floor(time.overheadTime * 10000) / 10} ms` : "";
      const coldOrWarmStart = isColdStart ? "🥶" : "🥵";
      mdOutput += `
| ${totalTimeMs} | ${initTimeMs} | ${invocTimeMs} | ${overheadTimeMs} | ${coldOrWarmStart} | ${memorySize} MB |`;
    });
  });

  let tableOfContents = "";
  memoryTimes.map(({ memorySize }) => {
    tableOfContents += `
- [Results for ${memorySize} MB](#results-for-${memorySize}-mb)`;
  });
  const header = `
# Benchmark: Response Times

The following are the response time results from AWS XRay, generated after running \`npm run benchmark\`.

![Average Cold/Warm Response Times](./response-times-average.svg)

- 🔵: Average cold startup times
- 🔴: Average warm startup times

![Fastest and Slowest Response Times](./response-times-extremes.svg)

- 🔵: Fastest warm response time
- 🔴: Slowest warm response time
- 🟡: Fastest cold response time
- 🟠: Slowest cold response time


## Overview

${tableOfContents}

`;
  const footer = `

## XRay Example of a Cold Start

<img width="1476" alt="Screenshot 2020-10-07 at 23 01 40" src="https://user-images.githubusercontent.com/1189998/95387505-178a1d00-08f1-11eb-83a7-7bc32eee48e2.png">

## XRay Example of a Warm Start

<img width="1479" alt="Screenshot 2020-10-07 at 23 01 23" src="https://user-images.githubusercontent.com/1189998/95387509-1953e080-08f1-11eb-8d46-ac25efa235e4.png">
`;
  mdOutput = header + mdOutput + footer;
  fs.writeFileSync("./benchmark/response-times.md", mdOutput);
};

const outputBenchmarkChart = async (memoryTimes: MemoryTimes[]) => {
  console.log("[OUTPUT] Charting benchmark times to 'response-times.svg'.");

  const opts = {
    options: {
      width: 700,
      height: 300,
      axisX: {
        showLabel: true,
        showGrid: false,
      },
      axisY: {
        labelInterpolationFnc: function (value: any) {
          return value + "ms";
        },
        scaleMinSpace: 15,
      },
    },
    title: {
      height: 50,
      fill: "#4A5572",
    },
    css: `.ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut{
      stroke: #4A5572
    }`,
  };

  const labels: string[] = [];
  const avgSeries: number[][] = [
    [], // Avg. Cold
    [], // Avg. Warm
  ];
  const extremesSeries: number[][] = [
    [], // Fastest Warm
    [], // Slowest Warm
    [], // Fastest Cold
    [], // Slowest Cold
  ];
  memoryTimes.map(({ memorySize, times }) => {
    labels.push(`${memorySize}MB`);
    avgSeries[0].push(Math.floor(times.overallTimes.avgColdMs! * 10000) / 10);
    avgSeries[1].push(Math.floor(times.overallTimes.avgWarmMs! * 10000) / 10);
    extremesSeries[0].push(Math.floor(times.overallTimes.fastestWarmMs! * 10000) / 10);
    extremesSeries[1].push(Math.floor(times.overallTimes.slowestWarmMs! * 10000) / 10);
    extremesSeries[2].push(Math.floor(times.overallTimes.fastestColdMs! * 10000) / 10);
    extremesSeries[3].push(Math.floor(times.overallTimes.slowestColdMs! * 10000) / 10);
  });

  const avgSeriesData = {
    title: "Average Cold/Warm Response Times Across Memory Configurations",
    labels,
    series: avgSeries,
  };
  const extremesSeriesData = {
    title: "Fastest and Slowest Response Times Across Memory Configurations",
    labels,
    series: extremesSeries,
  };

  chartistSvg("bar", avgSeriesData, opts).then((html: any) => {
    fs.writeFileSync("./benchmark/response-times-average.svg", html);
  });
  chartistSvg("bar", extremesSeriesData, opts).then((html: any) => {
    fs.writeFileSync("./benchmark/response-times-extremes.svg", html);
  });
};

const invokeFunctions = async (functionName: string, memorySize: number) => {
  const lambdaClient = new LambdaClient({});
  const baseConfiguration = await lambdaClient.send(
    new GetFunctionConfigurationCommand({
      FunctionName: functionName,
    })
  );

  // We generate the update configuration on the fly to always provide a unique
  // benchmark run time.
  const updateConfiguration: () => UpdateFunctionConfigurationCommandInput = () => ({
    FunctionName: functionName,
    MemorySize: memorySize,
    Environment: {
      Variables: {
        ...baseConfiguration.Environment?.Variables,
        BENCHMARK_RUN_TIME: `${new Date().toISOString()}-${Math.random()}`,
      },
    },
  });
  const testPayload: InvokeCommandInput = {
    FunctionName: functionName,
    Payload: Buffer.from(JSON.stringify({ firstName: "world" })),
  };

  for (let cI = 0; cI < COLD_STARTS; cI++) {
    console.log("[Benchmark] Updating the function to ensure a cold start.");
    await lambdaClient.send(new UpdateFunctionConfigurationCommand(updateConfiguration()));
    console.log("[Benchmark] Invoke cold-start function.");
    await lambdaClient.send(new InvokeCommand(testPayload));
    for (let wI = 0; wI < WARM_STARTS; wI++) {
      console.log("[Benchmark] Invoke warm-start function.");
      await sleep(500);
      await lambdaClient.send(new InvokeCommand(testPayload));
    }
  }
};

const fetchXRayTraceSummaries = async (functionName: string, benchmarkStartTime: Date): Promise<TraceSummary[]> => {
  const benchmarkEndTime = new Date();
  const xRayClient = new XRayClient({});

  console.log("[TRACES] XRay traces take a bit of time to appear, so we wait 10 seconds before requesting.");
  await sleep(10000);

  const traceSummaries: TraceSummary[] = [];
  let nextTokenSummary: string | undefined;
  let retries = 0;
  let retry = true;
  while (retry) {
    const traceInput: GetTraceSummariesCommandInput = {
      StartTime: benchmarkStartTime,
      EndTime: benchmarkEndTime,
      FilterExpression: `service(id(name: "${functionName}", type: "AWS::Lambda"))`,
      NextToken: nextTokenSummary,
    };
    const traceSummariesRes = await xRayClient.send(new GetTraceSummariesCommand(traceInput));
    nextTokenSummary = traceSummariesRes.NextToken;
    traceSummaries.push(...(traceSummariesRes.TraceSummaries ?? []));

    // Make sure we've fetched all our traces. We only require 90% to have been gathered, since
    // XRay is sampling our requests.
    if ((traceSummariesRes.TraceSummaries?.length ?? 0) + traceSummaries.length < COLD_STARTS * WARM_STARTS * 0.9) {
      if (retries >= 20) {
        throw new Error(
          `[TEARDOWN] Failed to get all traces for the invocations, was only able to find '${traceSummariesRes.TraceSummaries?.length}' traces.`
        );
      }
      console.log("[TRACES] Traces has still not appeared, waiting 1 seconds and trying again...");
      await sleep(1000);
      retries++;
    } else {
      retry = false;
    }

    if (!retry && nextTokenSummary === undefined) {
      break;
    }
  }
  console.log("[TRACES] Fetched trace summaries, fetching detailed trace information.");
  return traceSummaries;
};

const fetchXRayTraceBatches = async (traceSummaries: TraceSummary[]): Promise<Trace[]> => {
  const xRayClient = new XRayClient({});

  const batchTraces: Trace[] = [];
  // We can only request 5 traces at a time, so we split the summary IDs into chunks.
  const batchSummaryChunks = chunkArray(traceSummaries, 5);

  let nextTokenBatch: string | undefined;
  for (let i = 0; i < batchSummaryChunks.length; i++) {
    const batchSummaryChunk = batchSummaryChunks[i];
    while (true) {
      const batchInput: BatchGetTracesCommandInput = {
        TraceIds: [...new Set(batchSummaryChunk.filter((t) => t.Id).map((t) => t.Id!))],
        NextToken: nextTokenBatch,
      };
      const batchTracesRes = await xRayClient.send(new BatchGetTracesCommand(batchInput));
      // Check if there are any unprocessed traces.
      if ((batchTracesRes.UnprocessedTraceIds?.length ?? 0) > 0) {
        console.log("[TRACES] Detailed traces are still being processed, waiting 1 second and trying again...");
        await sleep(1000);
        continue;
      }

      nextTokenBatch = batchTracesRes.NextToken;
      batchTraces.push(...(batchTracesRes.Traces ?? []));

      if (nextTokenBatch === undefined) {
        break;
      }
    }
  }

  return batchTraces;
};

(async () => {
  const functionName = `${STACK_NAME}-main`;
  console.log(`[SETUP] BENCHMARK_SUFFIX = ${BENCHMARK_SUFFIX}`);
  console.log(`[SETUP] Stack Name = ${functionName}`);
  if (!BENCHMARK_SUFFIX) {
    console.error("No 'BENCHMARK_SUFFIX' was set!");
    process.exit(1);
  }

  if (DRY_RUN === "true") {
    const times = fs.readFileSync("./benchmark/traces.json").toString();
    outputBenchmarkMarkdown(JSON.parse(times));
    outputBenchmarkChart(JSON.parse(times));
    return;
  }

  const benchmarkStartTime = new Date();
  const memorySizes = [128, 256, 512, 1024, 2048, 3072, 4096];
  try {
    const memoryTimes: MemoryTimes[] = [];
    for (let i = 0; i < memorySizes.length; i++) {
      const memorySize = memorySizes[i];
      await invokeFunctions(functionName, memorySize);
      const traceSummaries = await fetchXRayTraceSummaries(functionName, benchmarkStartTime);
      const traceBatches = await fetchXRayTraceBatches(traceSummaries);
      const times = processXRayTraces(traceBatches);
      memoryTimes.push({
        memorySize,
        times,
      });
    }

    fs.writeFileSync("./benchmark/traces.json", JSON.stringify(memoryTimes));
    outputBenchmarkMarkdown(memoryTimes);
    outputBenchmarkChart(memoryTimes);
  } catch (err) {
    console.error(err.message);
  }
})();
