
# Benchmark: Response Times

The following are the response time results from AWS XRay, generated after running `npm run benchmark`.

![Average Cold/Warm Response Times](./response-times-average.svg)

- 🔵: Average cold startup times
- 🔴: Average warm startup times

![Fastest and Slowest Response Times](./response-times-extremes.svg)

- 🔵: Fastest warm response time
- 🔴: Slowest warm response time
- 🟡: Fastest cold response time
- 🟠: Slowest cold response time



## Overview

  
- [Results for 128 MB](#results-for-128-mb)
- [Results for 256 MB](#results-for-256-mb)
- [Results for 512 MB](#results-for-512-mb)
- [Results for 1024 MB](#results-for-1024-mb)
- [Results for 2048 MB](#results-for-2048-mb)
- [Results for 3072 MB](#results-for-3072-mb)
- [Results for 4096 MB](#results-for-4096-mb)


## Results for 128 MB

| Measurement (128 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 37 ms |
| Average cold start response time | 142.5 ms |
| Fastest warm response time | 6.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 131 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 128 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 128 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 128 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 128 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 128 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 128 MB |

## Results for 256 MB

| Measurement (256 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 8.6 ms |
| Average cold start response time | 137 ms |
| Fastest warm response time | 6.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 105 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 19.9 ms |  | 13.1 ms | 0.1 ms | 🥵 | 256 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 256 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 256 MB |
| 34.9 ms |  | 8.8 ms | 19.5 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 105 ms | 22.9 ms | 0.4 ms | 0.1 ms | 🥶 | 256 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 256 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 256 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 121.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 256 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 256 MB |

## Results for 512 MB

| Measurement (512 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 14.3 ms |
| Average cold start response time | 139 ms |
| Fastest warm response time | 5.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 105 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 19.9 ms |  | 13.1 ms | 0.1 ms | 🥵 | 512 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 8.9 ms |  | 0.2 ms | 0.2 ms | 🥵 | 512 MB |
| 118.9 ms | 17.1 ms | 0.5 ms | 0 ms | 🥶 | 512 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 121.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 512 MB |
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 105 ms | 22.9 ms | 0.4 ms | 0.1 ms | 🥶 | 512 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 512 MB |
| 133 ms | 28.5 ms | 0.5 ms | 0.1 ms | 🥶 | 512 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 512 MB |
| 34.9 ms |  | 8.8 ms | 19.5 ms | 🥵 | 512 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 512 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |

## Results for 1024 MB

| Measurement (1024 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 9.2 ms |
| Average cold start response time | 135.6 ms |
| Fastest warm response time | 5.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 101 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 19.9 ms |  | 13.1 ms | 0.1 ms | 🥵 | 1024 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 101 ms | 28.6 ms | 0.5 ms | 0.2 ms | 🥶 | 1024 MB |
| 8.9 ms |  | 0.2 ms | 0.2 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 148.9 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.4 ms | 0.4 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 118.9 ms | 17.1 ms | 0.5 ms | 0 ms | 🥶 | 1024 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 121.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 24 ms |  | 0.5 ms | 0 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 1024 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 133 ms | 28.5 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 105 ms | 22.9 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 34.9 ms |  | 8.8 ms | 19.5 ms | 🥵 | 1024 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 1024 MB |

## Results for 2048 MB

| Measurement (2048 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 8.5 ms |
| Average cold start response time | 144.2 ms |
| Fastest warm response time | 5.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 101 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 19.9 ms |  | 13.1 ms | 0.1 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 101 ms | 28.6 ms | 0.5 ms | 0.2 ms | 🥶 | 2048 MB |
| 8.9 ms |  | 0.2 ms | 0.2 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 11 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.4 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 118.9 ms | 17.1 ms | 0.5 ms | 0 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 111.9 ms | 31.4 ms | 0.4 ms | 0.3 ms | 🥶 | 2048 MB |
| 148.9 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 24 ms |  | 0.5 ms | 0 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 121.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 2048 MB |
| 105 ms | 22.9 ms | 0.4 ms | 0.1 ms | 🥶 | 2048 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 2048 MB |
| 133 ms | 28.5 ms | 0.5 ms | 0.1 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 144 ms | 24.7 ms | 0.6 ms | 0.2 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 34.9 ms |  | 8.8 ms | 19.5 ms | 🥵 | 2048 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 2048 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 2048 MB |
| 8.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |

## Results for 3072 MB

| Measurement (3072 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 8.7 ms |
| Average cold start response time | 144.7 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 86 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 11 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 86 ms | 18.3 ms | 0.4 ms | 0.1 ms | 🥶 | 3072 MB |
| 19.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 3072 MB |
| 101 ms | 28.6 ms | 0.5 ms | 0.2 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.4 ms | 🥵 | 3072 MB |
| 148.9 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 24 ms |  | 0.5 ms | 0 ms | 🥵 | 3072 MB |
| 111.9 ms | 31.4 ms | 0.4 ms | 0.3 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 121.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 105 ms | 17.8 ms | 0.6 ms | 0.3 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 105 ms | 22.9 ms | 0.4 ms | 0.1 ms | 🥶 | 3072 MB |
| 19.9 ms |  | 13.1 ms | 0.1 ms | 🥵 | 3072 MB |
| 8.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 8.9 ms |  | 0.2 ms | 0.2 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 118.9 ms | 17.1 ms | 0.5 ms | 0 ms | 🥶 | 3072 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 133 ms | 28.5 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 3072 MB |
| 144 ms | 24.7 ms | 0.6 ms | 0.2 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 34.9 ms |  | 8.8 ms | 19.5 ms | 🥵 | 3072 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 13.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 3072 MB |
| 4.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |

## Results for 4096 MB

| Measurement (4096 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 10.2 ms |
| Average cold start response time | 143.7 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 62 ms |
| Fastest cold response time  | 86 ms |
| Slowest cold response time | 154 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 19.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 4096 MB |
| 86 ms | 18.3 ms | 0.4 ms | 0.1 ms | 🥶 | 4096 MB |
| 101 ms | 28.6 ms | 0.5 ms | 0.2 ms | 🥶 | 4096 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 11 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 121 ms | 17.6 ms | 0.5 ms | 0.1 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.4 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 111.9 ms | 31.4 ms | 0.4 ms | 0.3 ms | 🥶 | 4096 MB |
| 148.9 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 121.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 4096 MB |
| 59 ms |  | 40.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 24 ms |  | 0.5 ms | 0 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.4 ms | 0 ms | 🥵 | 4096 MB |
| 105 ms | 22.9 ms | 0.4 ms | 0.1 ms | 🥶 | 4096 MB |
| 131.9 ms | 19.4 ms | 0.6 ms | 0.4 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 4096 MB |
| 105 ms | 17.8 ms | 0.6 ms | 0.3 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 19.9 ms |  | 13.1 ms | 0.1 ms | 🥵 | 4096 MB |
| 8.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 118.9 ms | 17.1 ms | 0.5 ms | 0 ms | 🥶 | 4096 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 8.9 ms |  | 0.2 ms | 0.2 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 62 ms |  | 34.9 ms | 19.8 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 131 ms | 24.8 ms | 0.5 ms | 0.3 ms | 🥶 | 4096 MB |
| 144 ms | 24.7 ms | 0.6 ms | 0.2 ms | 🥶 | 4096 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 133 ms | 28.5 ms | 0.5 ms | 0.1 ms | 🥶 | 4096 MB |
| 12 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 34.9 ms |  | 8.8 ms | 19.5 ms | 🥵 | 4096 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 4096 MB |
| 154 ms | 24.9 ms | 0.6 ms | 0.1 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 4.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 13.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |


## XRay Example of a Cold Start

<img width="1476" alt="Screenshot 2020-10-07 at 23 01 40" src="https://user-images.githubusercontent.com/1189998/95387505-178a1d00-08f1-11eb-83a7-7bc32eee48e2.png">

## XRay Example of a Warm Start

<img width="1479" alt="Screenshot 2020-10-07 at 23 01 23" src="https://user-images.githubusercontent.com/1189998/95387509-1953e080-08f1-11eb-8d46-ac25efa235e4.png">
