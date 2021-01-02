
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
| Average warm start response time | 30 ms |
| Average cold start response time | 145 ms |
| Fastest warm response time | 6 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 134 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 128 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 128 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 128 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 128 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 128 MB |

## Results for 256 MB

| Measurement (256 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 24.4 ms |
| Average cold start response time | 124.2 ms |
| Fastest warm response time | 6 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 106.9 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 32.9 ms |  | 24.3 ms | 0.1 ms | 🥵 | 256 MB |
| 120 ms | 18.7 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 256 MB |
| 26 ms |  | 17.8 ms | 0.4 ms | 🥵 | 256 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 256 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 256 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 256 MB |
| 106.9 ms | 33.4 ms | 0.6 ms | 0.4 ms | 🥶 | 256 MB |

## Results for 512 MB

| Measurement (512 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 11.4 ms |
| Average cold start response time | 120.6 ms |
| Fastest warm response time | 6 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 106.9 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 32.9 ms |  | 24.3 ms | 0.1 ms | 🥵 | 512 MB |
| 120 ms | 18.7 ms | 0.4 ms | 0.2 ms | 🥶 | 512 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 512 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 512 MB |
| 137 ms | 28.2 ms | 1.1 ms | 0.2 ms | 🥶 | 512 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 26 ms |  | 17.8 ms | 0.4 ms | 🥵 | 512 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 512 MB |
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 512 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 512 MB |
| 132.9 ms | 24.7 ms | 0.7 ms | 0.2 ms | 🥶 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 512 MB |
| 106.9 ms | 33.4 ms | 0.6 ms | 0.4 ms | 🥶 | 512 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 512 MB |

## Results for 1024 MB

| Measurement (1024 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 9.3 ms |
| Average cold start response time | 122.8 ms |
| Fastest warm response time | 6 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 106.9 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 32.9 ms |  | 24.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 120 ms | 18.7 ms | 0.4 ms | 0.2 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.3 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 137 ms | 28.2 ms | 1.1 ms | 0.2 ms | 🥶 | 1024 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 26 ms |  | 17.8 ms | 0.4 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 1024 MB |
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 1024 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 1024 MB |
| 132.9 ms | 24.7 ms | 0.7 ms | 0.2 ms | 🥶 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 1024 MB |
| 142.9 ms | 25.7 ms | 0.6 ms | 0.3 ms | 🥶 | 1024 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 1024 MB |
| 106.9 ms | 33.4 ms | 0.6 ms | 0.4 ms | 🥶 | 1024 MB |

## Results for 2048 MB

| Measurement (2048 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 7.1 ms |
| Average cold start response time | 118.9 ms |
| Fastest warm response time | 6 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 102.9 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 32.9 ms |  | 24.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 120 ms | 18.7 ms | 0.4 ms | 0.2 ms | 🥶 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.3 ms | 0.3 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 2048 MB |
| 145.9 ms | 20.6 ms | 0.6 ms | 0.4 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 2048 MB |
| 137 ms | 28.2 ms | 1.1 ms | 0.2 ms | 🥶 | 2048 MB |
| 26 ms |  | 17.8 ms | 0.4 ms | 🥵 | 2048 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 14 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 2048 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 2048 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 2048 MB |
| 132.9 ms | 24.7 ms | 0.7 ms | 0.2 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 102.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 142.9 ms | 25.7 ms | 0.6 ms | 0.3 ms | 🥶 | 2048 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 2048 MB |
| 106.9 ms | 33.4 ms | 0.6 ms | 0.4 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 2048 MB |

## Results for 3072 MB

| Measurement (3072 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 7 ms |
| Average cold start response time | 113.6 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 102.9 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 32.9 ms |  | 24.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 120 ms | 18.7 ms | 0.4 ms | 0.2 ms | 🥶 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.3 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 3072 MB |
| 110.9 ms | 18.4 ms | 0.4 ms | 0.1 ms | 🥶 | 3072 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 3072 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 145.9 ms | 20.6 ms | 0.6 ms | 0.4 ms | 🥶 | 3072 MB |
| 13 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 137 ms | 28.2 ms | 1.1 ms | 0.2 ms | 🥶 | 3072 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 3072 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 26 ms |  | 17.8 ms | 0.4 ms | 🥵 | 3072 MB |
| 14 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 12 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 3072 MB |
| 120 ms | 21.8 ms | 0.6 ms | 0.2 ms | 🥶 | 3072 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 3072 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 4.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 132.9 ms | 24.7 ms | 0.7 ms | 0.2 ms | 🥶 | 3072 MB |
| 142.9 ms | 25.7 ms | 0.6 ms | 0.3 ms | 🥶 | 3072 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 3072 MB |
| 102.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 106.9 ms | 33.4 ms | 0.6 ms | 0.4 ms | 🥶 | 3072 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 3072 MB |

## Results for 4096 MB

| Measurement (4096 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 8.3 ms |
| Average cold start response time | 123.8 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 121.9 ms |
| Fastest cold response time  | 98.9 ms |
| Slowest cold response time | 156 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 8 ms |  | 0.3 ms | 0.3 ms | 🥵 | 4096 MB |
| 32.9 ms |  | 24.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 120 ms | 18.7 ms | 0.4 ms | 0.2 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 4096 MB |
| 145.9 ms | 20.6 ms | 0.6 ms | 0.4 ms | 🥶 | 4096 MB |
| 156 ms | 27.9 ms | 0.7 ms | 0.5 ms | 🥶 | 4096 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 44 ms |  | 37 ms | 0.1 ms | 🥵 | 4096 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 137 ms | 28.2 ms | 1.1 ms | 0.2 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.6 ms | 0 ms | 🥵 | 4096 MB |
| 27 ms |  | 19.1 ms | 0.1 ms | 🥵 | 4096 MB |
| 121.9 ms |  | 40 ms | 59.9 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 134 ms | 17.5 ms | 0.9 ms | 3.2 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 102.9 ms | 29.4 ms | 0.5 ms | 0.1 ms | 🥶 | 4096 MB |
| 4.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 142.9 ms | 25.7 ms | 0.6 ms | 0.3 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 4096 MB |
| 98.9 ms | 20.8 ms | 0.8 ms | 0.4 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 4096 MB |
| 108.9 ms | 20.5 ms | 0.6 ms | 0 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 110.9 ms | 18.4 ms | 0.4 ms | 0.1 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 13 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 26 ms |  | 17.8 ms | 0.4 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 14 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |
| 12 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 106.9 ms | 33.4 ms | 0.6 ms | 0.4 ms | 🥶 | 4096 MB |
| 120 ms | 21.8 ms | 0.6 ms | 0.2 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 132.9 ms | 24.7 ms | 0.7 ms | 0.2 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |


## XRay Example of a Cold Start

<img width="1476" alt="Screenshot 2020-10-07 at 23 01 40" src="https://user-images.githubusercontent.com/1189998/95387505-178a1d00-08f1-11eb-83a7-7bc32eee48e2.png">

## XRay Example of a Warm Start

<img width="1479" alt="Screenshot 2020-10-07 at 23 01 23" src="https://user-images.githubusercontent.com/1189998/95387509-1953e080-08f1-11eb-8d46-ac25efa235e4.png">
