import * as fs from "fs";

import * as traces from "./traces.json";

interface Traces {
  Traces: Trace[];
  UnprocessedTraceIds: string[];
}

interface Trace {
  Id: string;
  Duration: number;
  Segments: {
    Id: string;
    Document: string;
  }[];
}

interface Document {
  id: string;
  name: string;
  start_time: number;
  trace_id: string;
  end_time: number;
  parent_id: string;
  aws: {
    account_id: string;
    function_arn: string;
    resource_names: string[];
  };
  origin: string;
  subsegments: {
    id: string;
    name: string;
    start_time: number;
    end_time: number;
    aws: {
      function_arn: string;
    };
  }[];
}

const main = () => {
  // Gather overall metrics.
  let avgWarmMs: number | undefined;
  let avgColdMs: number | undefined;
  let fastestWarmMs: number | undefined;
  let fastestColdMs: number | undefined;
  let slowestWarmMs: number | undefined;
  let slowestColdMs: number | undefined;

  // Gather per-trace metrics.
  (traces as Traces).Traces?.map((trace) => {
    let totalTime: number | undefined;
    let initTime: number | undefined;
    let invocTime: number | undefined;
    let overheadTime: number | undefined;

    // Piece together the segment timings into one measurement.
    trace.Segments?.map((segment) => {
      const seg: Document = JSON.parse(segment.Document);
      if (seg.origin === "AWS::Lambda") {
        totalTime = seg.end_time - seg.start_time;
      } else if (seg.origin === "AWS::Lambda::Function") {
        seg.subsegments?.map((subSeg) => {
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

    const totalTimeMs = `${Math.floor(totalTime! * 10000) / 10} ms`;
    const initTimeMs = initTime ? `${Math.floor(initTime * 10000) / 10} ms` : "";
    const invocTimeMs = invocTime ? `${Math.floor(invocTime * 10000) / 10} ms` : "";
    const overheadTimeMs = overheadTime ? `${Math.floor(overheadTime * 10000) / 10} ms` : "";
    const isColdStart = !!initTimeMs;
    const coldOrWarmStart = isColdStart ? "🥶" : "🥵";
    console.log(`| ${totalTimeMs} | ${initTimeMs} | ${invocTimeMs} | ${overheadTimeMs} | ${coldOrWarmStart} |`);

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

  //   console.log(`

  // | Measurement | Time (ms) |
  // |-------------|------|
  // | Average warm start response time | ${Math.floor(avgWarmMs! * 10000) / 10} ms |
  // | Average cold start response time | ${Math.floor(avgColdMs! * 10000) / 10} ms |
  // | Fastest warm response time | ${Math.floor(fastestWarmMs! * 10000) / 10} ms |
  // | Slowest warm response time | ${Math.floor(slowestWarmMs! * 10000) / 10} ms |
  // | Fastest cold response time  | ${Math.floor(fastestColdMs! * 10000) / 10} ms |
  // | Slowest cold response time | ${Math.floor(slowestColdMs! * 10000) / 10} ms |
  // `);
};

main();
