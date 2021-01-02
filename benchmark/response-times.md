
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
| Average warm start response time | 13.1 ms |
| Average cold start response time | 97.5 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 120 ms |
| Fastest cold response time  | 88.9 ms |
| Slowest cold response time | 170 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 8 ms |  | 0.3 ms | 0 ms | 🥵 | 128 MB |
| 22 ms |  | 13.1 ms | 0.1 ms | 🥵 | 128 MB |
| 9 ms |  | 1.6 ms | 0.1 ms | 🥵 | 128 MB |
| 90.9 ms |  |  |  | 🥵 | 128 MB |
| 24.9 ms |  | 17.3 ms | 0 ms | 🥵 | 128 MB |
| 92 ms | 24.3 ms | 0.4 ms | 0.3 ms | 🥶 | 128 MB |
| 36.9 ms |  | 28 ms | 0.1 ms | 🥵 | 128 MB |
| 24.9 ms |  | 0.6 ms | 0.1 ms | 🥵 | 128 MB |
| 123 ms | 27 ms | 0.6 ms | 0.4 ms | 🥶 | 128 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 128 MB |
| 13.9 ms |  | 6 ms | 0.2 ms | 🥵 | 128 MB |
| 108.9 ms | 27.1 ms | 0.7 ms | 0.6 ms | 🥶 | 128 MB |
| 108 ms | 23.4 ms | 0.4 ms | 0.3 ms | 🥶 | 128 MB |
| 8.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 62 ms |  | 27.8 ms | 19.8 ms | 🥵 | 128 MB |
| 47.9 ms |  | 40.1 ms | 0.1 ms | 🥵 | 128 MB |
| 39 ms |  | 25.8 ms | 0.2 ms | 🥵 | 128 MB |
| 95.9 ms | 22.4 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 101 ms |  | 80.4 ms | 0.2 ms | 🥵 | 128 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 32.9 ms |  | 27.2 ms | 0.1 ms | 🥵 | 128 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 128 MB |
| 140 ms | 19.6 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 5.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 128 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 100 ms | 26.4 ms | 0.7 ms | 0.1 ms | 🥶 | 128 MB |
| 23.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 128 MB |
| 15 ms |  | 0.5 ms | 0.2 ms | 🥵 | 128 MB |
| 90.9 ms | 25.7 ms | 0.5 ms | 0.1 ms | 🥶 | 128 MB |
| 86.9 ms |  | 80.7 ms | 0.2 ms | 🥵 | 128 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 128 MB |
| 14.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 128 MB |
| 120 ms |  | 39.9 ms | 59.8 ms | 🥵 | 128 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 30.9 ms |  | 22.4 ms | 0.2 ms | 🥵 | 128 MB |
| 16 ms |  | 5.7 ms | 0.1 ms | 🥵 | 128 MB |
| 98 ms | 28.5 ms | 0.4 ms | 0.4 ms | 🥶 | 128 MB |
| 26.9 ms |  | 19.1 ms | 0.1 ms | 🥵 | 128 MB |
| 23.9 ms |  | 14.5 ms | 0.2 ms | 🥵 | 128 MB |
| 8.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 128 MB |
| 94 ms | 17.7 ms | 0.4 ms | 0.1 ms | 🥶 | 128 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 23 ms |  | 17.1 ms | 0.4 ms | 🥵 | 128 MB |
| 167.9 ms | 24.2 ms | 0.4 ms | 0.1 ms | 🥶 | 128 MB |
| 98.9 ms | 25.8 ms | 0.6 ms | 0.1 ms | 🥶 | 128 MB |
| 48 ms |  | 21.1 ms | 19.8 ms | 🥵 | 128 MB |
| 127 ms | 18.9 ms | 0.7 ms | 0.2 ms | 🥶 | 128 MB |
| 91 ms | 25.2 ms | 0.4 ms | 0.2 ms | 🥶 | 128 MB |
| 8.9 ms |  | 1.4 ms | 0.2 ms | 🥵 | 128 MB |
| 51 ms |  | 42.4 ms | 0.2 ms | 🥵 | 128 MB |
| 7 ms |  | 0.4 ms | 0.4 ms | 🥵 | 128 MB |
| 107 ms | 27.4 ms | 0.4 ms | 0.1 ms | 🥶 | 128 MB |
| 11 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 27.9 ms |  | 17.2 ms | 0.4 ms | 🥵 | 128 MB |
| 7.9 ms |  | 0.3 ms | 0 ms | 🥵 | 128 MB |
| 51.9 ms |  | 24.2 ms | 19.6 ms | 🥵 | 128 MB |
| 111 ms | 25.1 ms | 0.5 ms | 0.6 ms | 🥶 | 128 MB |
| 126 ms | 18.2 ms | 0.3 ms | 0.3 ms | 🥶 | 128 MB |
| 93 ms | 24.5 ms | 0.5 ms | 0.1 ms | 🥶 | 128 MB |
| 36 ms |  | 12.5 ms | 0.1 ms | 🥵 | 128 MB |
| 105 ms | 19.5 ms | 0.5 ms | 0 ms | 🥶 | 128 MB |
| 115.9 ms | 32 ms | 0.5 ms | 0.3 ms | 🥶 | 128 MB |
| 86 ms |  |  |  | 🥵 | 128 MB |
| 74 ms |  | 46.9 ms | 19.5 ms | 🥵 | 128 MB |
| 51 ms |  | 40.1 ms | 0.1 ms | 🥵 | 128 MB |
| 69 ms |  | 60.8 ms | 0.2 ms | 🥵 | 128 MB |
| 9.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 128 MB |
| 98 ms | 28.5 ms | 0.6 ms | 0.2 ms | 🥶 | 128 MB |
| 49.9 ms |  | 40 ms | 0.2 ms | 🥵 | 128 MB |
| 93 ms | 23.9 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 88.9 ms |  |  |  | 🥵 | 128 MB |
| 109.9 ms | 28.1 ms | 0.6 ms | 0.2 ms | 🥶 | 128 MB |
| 19.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 17 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 29.9 ms |  | 22.7 ms | 0.2 ms | 🥵 | 128 MB |
| 95.9 ms | 20.6 ms | 0.4 ms | 0.3 ms | 🥶 | 128 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 128 MB |
| 13.9 ms |  | 7.7 ms | 0.1 ms | 🥵 | 128 MB |
| 18 ms |  | 11.8 ms | 0.2 ms | 🥵 | 128 MB |
| 91 ms | 21.4 ms | 0.8 ms | 0.2 ms | 🥶 | 128 MB |
| 6 ms |  | 0.4 ms | 0.4 ms | 🥵 | 128 MB |
| 6.9 ms |  | 0.5 ms | 0 ms | 🥵 | 128 MB |
| 138.9 ms | 30.9 ms | 0.4 ms | 14 ms | 🥶 | 128 MB |
| 36 ms |  | 27.6 ms | 0.2 ms | 🥵 | 128 MB |
| 102.9 ms | 19.6 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 98 ms | 24.6 ms | 0.5 ms | 0.3 ms | 🥶 | 128 MB |
| 85 ms |  | 78.1 ms | 0.3 ms | 🥵 | 128 MB |
| 56.9 ms |  | 29.5 ms | 19.8 ms | 🥵 | 128 MB |
| 117 ms | 25 ms | 0.5 ms | 0.3 ms | 🥶 | 128 MB |
| 69.9 ms |  | 40.2 ms | 19.9 ms | 🥵 | 128 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 116.9 ms | 25.4 ms | 0.8 ms | 0.5 ms | 🥶 | 128 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 128 MB |
| 119.9 ms | 24.1 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 21.9 ms |  | 15.4 ms | 0.1 ms | 🥵 | 128 MB |
| 136 ms | 25.6 ms | 0.6 ms | 0.2 ms | 🥶 | 128 MB |
| 170 ms | 23.9 ms | 0.6 ms | 0.1 ms | 🥶 | 128 MB |
| 97 ms | 25.9 ms | 0.4 ms | 0.4 ms | 🥶 | 128 MB |
| 9.9 ms |  | 2.1 ms | 0.2 ms | 🥵 | 128 MB |
| 23.9 ms |  | 16.4 ms | 0.2 ms | 🥵 | 128 MB |
| 112.9 ms | 24.1 ms | 0.6 ms | 0.2 ms | 🥶 | 128 MB |
| 7 ms |  | 0.3 ms | 0 ms | 🥵 | 128 MB |
| 54.9 ms |  | 29.6 ms | 19.1 ms | 🥵 | 128 MB |
| 90 ms | 30.1 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 101 ms | 31 ms | 0.5 ms | 0.4 ms | 🥶 | 128 MB |
| 8 ms |  | 0.3 ms | 0 ms | 🥵 | 128 MB |
| 20.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 128 MB |
| 104 ms | 25.9 ms | 0.6 ms | 0.5 ms | 🥶 | 128 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 128 MB |
| 19.9 ms |  | 12.1 ms | 0.1 ms | 🥵 | 128 MB |
| 94 ms | 24.8 ms | 0.5 ms | 0.1 ms | 🥶 | 128 MB |
| 5 ms |  | 0.4 ms | 0.1 ms | 🥵 | 128 MB |
| 100 ms | 17.7 ms | 0.4 ms | 0.4 ms | 🥶 | 128 MB |
| 4.9 ms |  |  |  | 🥵 | 128 MB |
| 88.9 ms | 26.1 ms | 0.5 ms | 0.1 ms | 🥶 | 128 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 128 MB |
| 23.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 128 MB |
| 96.9 ms | 26.2 ms | 0.3 ms | 0.5 ms | 🥶 | 128 MB |
| 46 ms |  | 17.5 ms | 19.9 ms | 🥵 | 128 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 128 MB |
| 126.9 ms | 23.8 ms | 0.6 ms | 0.5 ms | 🥶 | 128 MB |
| 24.9 ms |  | 18.1 ms | 0.1 ms | 🥵 | 128 MB |
| 118 ms | 18.3 ms | 0.6 ms | 0.1 ms | 🥶 | 128 MB |
| 95.9 ms | 27.1 ms | 0.5 ms | 0.3 ms | 🥶 | 128 MB |
| 7.9 ms |  |  |  | 🥵 | 128 MB |
| 58 ms |  | 50.6 ms | 0.1 ms | 🥵 | 128 MB |
| 15 ms |  | 6.3 ms | 0.1 ms | 🥵 | 128 MB |
| 107 ms | 21.5 ms | 0.5 ms | 0.2 ms | 🥶 | 128 MB |
| 16.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 128 MB |
| 89 ms | 26.3 ms | 0.4 ms | 0.2 ms | 🥶 | 128 MB |
| 5 ms |  | 0.3 ms | 0.2 ms | 🥵 | 128 MB |

## Results for 256 MB

| Measurement (256 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 18.9 ms |
| Average cold start response time | 97.3 ms |
| Fastest warm response time | 6 ms |
| Slowest warm response time | 91 ms |
| Fastest cold response time  | 85 ms |
| Slowest cold response time | 122.9 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 94 ms | 19.1 ms | 0.9 ms | 0.1 ms | 🥶 | 256 MB |
| 13 ms |  | 0.3 ms | 0.2 ms | 🥵 | 256 MB |
| 105 ms | 30.8 ms | 0.5 ms | 0.5 ms | 🥶 | 256 MB |
| 26.9 ms |  | 18.7 ms | 0.1 ms | 🥵 | 256 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 256 MB |
| 102.9 ms | 29.5 ms | 3 ms | 0.7 ms | 🥶 | 256 MB |
| 91 ms | 18.5 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 13 ms |  | 2.7 ms | 0.2 ms | 🥵 | 256 MB |
| 89.9 ms | 21 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 38 ms |  | 32.4 ms | 0.4 ms | 🥵 | 256 MB |
| 28 ms |  | 19.5 ms | 0.1 ms | 🥵 | 256 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 105 ms | 23.5 ms | 0.6 ms | 0.1 ms | 🥶 | 256 MB |
| 9 ms |  | 0.6 ms | 0.1 ms | 🥵 | 256 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 66.9 ms |  | 20.1 ms | 0.1 ms | 🥵 | 256 MB |
| 29.9 ms |  | 14.9 ms | 0.2 ms | 🥵 | 256 MB |
| 9.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 256 MB |
| 10.9 ms |  | 0.3 ms | 0 ms | 🥵 | 256 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 256 MB |
| 10.9 ms |  | 4.9 ms | 0.2 ms | 🥵 | 256 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 19 ms |  | 10.6 ms | 0.2 ms | 🥵 | 256 MB |
| 23 ms |  | 17.3 ms | 0.3 ms | 🥵 | 256 MB |
| 88 ms | 25.4 ms | 0.5 ms | 0.3 ms | 🥶 | 256 MB |
| 102.9 ms | 30.2 ms | 0.6 ms | 0.5 ms | 🥶 | 256 MB |
| 101.9 ms | 28.5 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 7.9 ms |  | 0.5 ms | 0.5 ms | 🥵 | 256 MB |
| 100 ms | 19 ms | 0.5 ms | 0.2 ms | 🥶 | 256 MB |
| 88.9 ms | 23.3 ms | 0.6 ms | 0.1 ms | 🥶 | 256 MB |
| 91 ms |  | 83.9 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 256 MB |
| 18 ms |  | 8.6 ms | 0.5 ms | 🥵 | 256 MB |
| 110 ms | 23.5 ms | 0.5 ms | 0.6 ms | 🥶 | 256 MB |
| 115 ms | 27.2 ms | 0.5 ms | 0.3 ms | 🥶 | 256 MB |
| 8.9 ms |  | 2.2 ms | 0.2 ms | 🥵 | 256 MB |
| 23 ms |  | 15.4 ms | 0.1 ms | 🥵 | 256 MB |
| 42.9 ms |  | 36.7 ms | 0.3 ms | 🥵 | 256 MB |
| 24.9 ms |  | 16.2 ms | 0.2 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 256 MB |
| 102.9 ms | 28.6 ms | 0.7 ms | 0.3 ms | 🥶 | 256 MB |
| 8 ms |  | 0.6 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 256 MB |
| 98.9 ms | 20.3 ms | 0.7 ms | 0.5 ms | 🥶 | 256 MB |
| 28 ms |  | 22 ms | 0.4 ms | 🥵 | 256 MB |
| 23.9 ms |  | 17.3 ms | 0.4 ms | 🥵 | 256 MB |
| 116 ms | 32.7 ms | 0.7 ms | 0.2 ms | 🥶 | 256 MB |
| 8 ms |  | 0.4 ms | 0 ms | 🥵 | 256 MB |
| 88 ms | 18.1 ms | 0.4 ms | 0.5 ms | 🥶 | 256 MB |
| 122.9 ms | 19 ms | 0.7 ms | 0.5 ms | 🥶 | 256 MB |
| 101 ms | 17.9 ms | 0.4 ms | 0.1 ms | 🥶 | 256 MB |
| 89.9 ms | 17.3 ms | 0.5 ms | 0.2 ms | 🥶 | 256 MB |
| 28.9 ms |  | 24.3 ms | 0.3 ms | 🥵 | 256 MB |
| 10.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 85 ms | 26.6 ms | 0.4 ms | 0.4 ms | 🥶 | 256 MB |
| 29 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 87 ms | 23.8 ms | 0.6 ms | 0.2 ms | 🥶 | 256 MB |
| 25 ms |  | 16.5 ms | 0.2 ms | 🥵 | 256 MB |
| 9.9 ms |  | 0.5 ms | 0 ms | 🥵 | 256 MB |
| 103 ms | 24.5 ms | 1 ms | 0.1 ms | 🥶 | 256 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 17.9 ms |  | 9.6 ms | 0.6 ms | 🥵 | 256 MB |
| 28 ms |  | 20.8 ms | 0.2 ms | 🥵 | 256 MB |
| 37.9 ms |  | 12.4 ms | 19.9 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 256 MB |
| 92 ms | 28.2 ms | 0.8 ms | 0.5 ms | 🥶 | 256 MB |
| 103 ms | 25.1 ms | 0.4 ms | 0.1 ms | 🥶 | 256 MB |
| 95 ms | 32.1 ms | 0.4 ms | 0.1 ms | 🥶 | 256 MB |
| 8 ms |  | 0.5 ms | 0.2 ms | 🥵 | 256 MB |
| 92.9 ms | 20.7 ms | 0.6 ms | 0.2 ms | 🥶 | 256 MB |
| 14 ms |  | 0.5 ms | 0.2 ms | 🥵 | 256 MB |
| 116 ms | 30.2 ms | 0.7 ms | 0.2 ms | 🥶 | 256 MB |
| 13.9 ms |  | 6.1 ms | 0.2 ms | 🥵 | 256 MB |
| 8 ms |  | 0.4 ms | 0 ms | 🥵 | 256 MB |
| 111.9 ms | 23.7 ms | 0.5 ms | 0.3 ms | 🥶 | 256 MB |
| 104 ms | 17.6 ms | 0.4 ms | 0.3 ms | 🥶 | 256 MB |
| 18 ms |  | 9.3 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 256 MB |
| 105 ms | 25.8 ms | 0.6 ms | 0.2 ms | 🥶 | 256 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 23.9 ms |  | 17.8 ms | 0.2 ms | 🥵 | 256 MB |
| 96.9 ms | 22.3 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 19.9 ms |  | 12.7 ms | 0.3 ms | 🥵 | 256 MB |
| 19.9 ms |  | 12.6 ms | 0.1 ms | 🥵 | 256 MB |
| 16 ms |  | 11.1 ms | 0.1 ms | 🥵 | 256 MB |
| 14.9 ms |  | 10 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 256 MB |
| 104 ms | 25.4 ms | 0.5 ms | 0.4 ms | 🥶 | 256 MB |
| 13.9 ms |  | 6.3 ms | 0.1 ms | 🥵 | 256 MB |
| 98.9 ms | 28.4 ms | 0.7 ms | 0.2 ms | 🥶 | 256 MB |
| 101 ms | 26.1 ms | 0.5 ms | 0.4 ms | 🥶 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 8.9 ms |  | 1.9 ms | 0.3 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 16.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 256 MB |
| 42.9 ms |  | 36.1 ms | 0.2 ms | 🥵 | 256 MB |
| 105 ms | 31.3 ms | 0.7 ms | 0.2 ms | 🥶 | 256 MB |
| 100 ms | 24.9 ms | 0.8 ms | 0.1 ms | 🥶 | 256 MB |
| 101.9 ms | 20.8 ms | 0.7 ms | 0.3 ms | 🥶 | 256 MB |
| 25 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 11.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 256 MB |
| 19.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 96 ms | 22.9 ms | 0.5 ms | 0.2 ms | 🥶 | 256 MB |
| 105.9 ms | 22.8 ms | 0.6 ms | 0.2 ms | 🥶 | 256 MB |
| 23.9 ms |  | 0.5 ms | 17.6 ms | 🥵 | 256 MB |
| 106 ms | 17.1 ms | 0.5 ms | 0.1 ms | 🥶 | 256 MB |
| 19 ms |  | 13.1 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 256 MB |
| 92.9 ms | 21.4 ms | 0.4 ms | 0.4 ms | 🥶 | 256 MB |
| 7.9 ms |  | 2.1 ms | 0.2 ms | 🥵 | 256 MB |
| 120 ms | 23.6 ms | 0.7 ms | 0.1 ms | 🥶 | 256 MB |
| 30.9 ms |  | 0.6 ms | 0.5 ms | 🥵 | 256 MB |
| 96.9 ms | 27.9 ms | 0.6 ms | 0.3 ms | 🥶 | 256 MB |
| 8 ms |  | 1 ms | 0.2 ms | 🥵 | 256 MB |
| 7.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 256 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 256 MB |
| 96.9 ms | 20 ms | 0.7 ms | 0.3 ms | 🥶 | 256 MB |
| 97.9 ms | 16.9 ms | 0.3 ms | 0.3 ms | 🥶 | 256 MB |
| 9.9 ms |  | 3.1 ms | 0.2 ms | 🥵 | 256 MB |
| 87.9 ms | 26.8 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 6.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 256 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 89.9 ms | 22.3 ms | 0.4 ms | 0.2 ms | 🥶 | 256 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 103 ms | 23.7 ms | 0.5 ms | 0.2 ms | 🥶 | 256 MB |
| 26 ms |  | 19.1 ms | 0.2 ms | 🥵 | 256 MB |
| 39.9 ms |  | 14.7 ms | 19.8 ms | 🥵 | 256 MB |
| 35 ms |  | 7.9 ms | 19.9 ms | 🥵 | 256 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 256 MB |
| 18 ms |  | 10.6 ms | 0.1 ms | 🥵 | 256 MB |

## Results for 512 MB

| Measurement (512 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 7.7 ms |
| Average cold start response time | 112.2 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 30 ms |
| Fastest cold response time  | 84.9 ms |
| Slowest cold response time | 130 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 104 ms | 25.4 ms | 0.6 ms | 0.2 ms | 🥶 | 512 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 27.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 97 ms | 25.3 ms | 0.4 ms | 0.2 ms | 🥶 | 512 MB |
| 100.9 ms | 19.3 ms | 0.7 ms | 0.3 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 130 ms | 30.4 ms | 0.5 ms | 0.2 ms | 🥶 | 512 MB |
| 10 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 30 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 112.9 ms | 20.8 ms | 0.6 ms | 0.3 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 5.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 512 MB |
| 105.9 ms | 27.7 ms | 0.6 ms | 0.3 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 115.9 ms | 18.6 ms | 0.8 ms | 0.1 ms | 🥶 | 512 MB |
| 5.9 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 101 ms | 28.7 ms | 0.5 ms | 0.3 ms | 🥶 | 512 MB |
| 115 ms | 22.6 ms | 0.4 ms | 0.1 ms | 🥶 | 512 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 8.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 512 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 95 ms | 23.2 ms | 0.5 ms | 0.6 ms | 🥶 | 512 MB |
| 96 ms | 23.6 ms | 0.5 ms | 0.1 ms | 🥶 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 89.9 ms | 24.6 ms | 0.6 ms | 0.4 ms | 🥶 | 512 MB |
| 108 ms | 23.3 ms | 0.4 ms | 0 ms | 🥶 | 512 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 8 ms |  | 0.7 ms | 0.1 ms | 🥵 | 512 MB |
| 94 ms | 22.9 ms | 0.3 ms | 0.2 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 512 MB |
| 92 ms | 26.4 ms | 0.6 ms | 0.2 ms | 🥶 | 512 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 104.9 ms | 31.2 ms | 0.5 ms | 0.4 ms | 🥶 | 512 MB |
| 90.9 ms | 29.6 ms | 0.7 ms | 0.2 ms | 🥶 | 512 MB |
| 5 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 92 ms | 16.7 ms | 0.3 ms | 0.3 ms | 🥶 | 512 MB |
| 101.9 ms | 25.9 ms | 0.4 ms | 0.1 ms | 🥶 | 512 MB |
| 105 ms | 19.9 ms | 0.4 ms | 0.2 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.7 ms | 0.1 ms | 🥵 | 512 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 16 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 84.9 ms | 23.3 ms | 0.5 ms | 0.1 ms | 🥶 | 512 MB |
| 96.9 ms | 25.5 ms | 0.6 ms | 0.9 ms | 🥶 | 512 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 92.9 ms | 23 ms | 0.4 ms | 0.2 ms | 🥶 | 512 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 512 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 93.9 ms | 27.6 ms | 0.8 ms | 0.2 ms | 🥶 | 512 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 119 ms | 28.8 ms | 0.4 ms | 0.2 ms | 🥶 | 512 MB |
| 111.9 ms | 30.3 ms | 0.5 ms | 0.2 ms | 🥶 | 512 MB |
| 96.9 ms | 26.1 ms | 0.4 ms | 0.3 ms | 🥶 | 512 MB |
| 8 ms |  | 0.7 ms | 0.2 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 512 MB |
| 108 ms | 19.9 ms | 0.5 ms | 0.3 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 111.9 ms | 18.8 ms | 0.5 ms | 0.2 ms | 🥶 | 512 MB |
| 113 ms | 17 ms | 0.7 ms | 0.4 ms | 🥶 | 512 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 95 ms | 28.3 ms | 0.6 ms | 0.6 ms | 🥶 | 512 MB |
| 9.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 107 ms | 24.8 ms | 0.6 ms | 0.5 ms | 🥶 | 512 MB |
| 6 ms |  | 0.6 ms | 0.2 ms | 🥵 | 512 MB |
| 95.9 ms | 22.6 ms | 0.4 ms | 0.3 ms | 🥶 | 512 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 102.9 ms | 25.4 ms | 0.5 ms | 0.3 ms | 🥶 | 512 MB |
| 4.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 512 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 100.9 ms | 21.5 ms | 0.4 ms | 0.1 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 512 MB |
| 116 ms | 18.9 ms | 0.6 ms | 0.1 ms | 🥶 | 512 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6 ms |  | 0.4 ms | 0.4 ms | 🥵 | 512 MB |
| 108 ms | 28.4 ms | 0.7 ms | 0.4 ms | 🥶 | 512 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 512 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 110.9 ms | 25.3 ms | 0.5 ms | 0.1 ms | 🥶 | 512 MB |
| 86.9 ms | 19.4 ms | 0.5 ms | 0.2 ms | 🥶 | 512 MB |
| 8 ms |  | 0.3 ms | 0.3 ms | 🥵 | 512 MB |
| 94 ms | 26 ms | 0.5 ms | 0.1 ms | 🥶 | 512 MB |
| 115.9 ms | 27.5 ms | 0.6 ms | 0.7 ms | 🥶 | 512 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 108.9 ms | 27.5 ms | 0.3 ms | 0.5 ms | 🥶 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 92 ms | 24.2 ms | 0.4 ms | 0.3 ms | 🥶 | 512 MB |
| 7.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 512 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 14.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 512 MB |
| 5 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 105 ms | 29.2 ms | 0.5 ms | 0.3 ms | 🥶 | 512 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.5 ms | 0.3 ms | 🥵 | 512 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 512 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 512 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 9 ms |  | 0.5 ms | 0 ms | 🥵 | 512 MB |
| 102.9 ms | 25.8 ms | 0.5 ms | 0.4 ms | 🥶 | 512 MB |
| 11 ms |  | 0.4 ms | 0.2 ms | 🥵 | 512 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 512 MB |
| 108 ms | 26.2 ms | 0.7 ms | 0.4 ms | 🥶 | 512 MB |
| 97 ms | 25.2 ms | 0.6 ms | 0.2 ms | 🥶 | 512 MB |
| 108 ms | 25.5 ms | 0.4 ms | 0.2 ms | 🥶 | 512 MB |
| 120 ms | 30.9 ms | 0.5 ms | 0.3 ms | 🥶 | 512 MB |

## Results for 1024 MB

| Measurement (1024 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 6.2 ms |
| Average cold start response time | 92.2 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 31 ms |
| Fastest cold response time  | 81 ms |
| Slowest cold response time | 363 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 105.9 ms | 27 ms | 0.6 ms | 0.1 ms | 🥶 | 1024 MB |
| 10 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 21 ms |  | 0.5 ms | 0.2 ms | 🥵 | 1024 MB |
| 98.9 ms | 28.2 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 93 ms | 30.1 ms | 0.7 ms | 0.2 ms | 🥶 | 1024 MB |
| 82 ms | 20.8 ms | 0.5 ms | 0 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 149 ms | 18 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 108 ms | 26.4 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 19.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 112 ms | 18.7 ms | 0.5 ms | 0.2 ms | 🥶 | 1024 MB |
| 106 ms | 32.4 ms | 0.5 ms | 0.3 ms | 🥶 | 1024 MB |
| 114 ms | 31.2 ms | 0.6 ms | 0.2 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.6 ms | 0.1 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 128.9 ms | 18.8 ms | 0.6 ms | 0.2 ms | 🥶 | 1024 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 1024 MB |
| 4.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.5 ms | 0.3 ms | 🥵 | 1024 MB |
| 195.9 ms | 21.4 ms | 0.6 ms | 0.2 ms | 🥶 | 1024 MB |
| 7 ms |  | 0.5 ms | 0.2 ms | 🥵 | 1024 MB |
| 88 ms | 26.4 ms | 0.3 ms | 0.1 ms | 🥶 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 5 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 91 ms | 26.6 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 131.9 ms | 18.3 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 115.9 ms | 24.7 ms | 0.6 ms | 0.1 ms | 🥶 | 1024 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 96.9 ms | 34.6 ms | 0.5 ms | 0.3 ms | 🥶 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 1024 MB |
| 12 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 122.9 ms | 32 ms | 0.6 ms | 0.7 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 113.9 ms | 17.9 ms | 0.4 ms | 0.5 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 92.9 ms | 22.8 ms | 0.5 ms | 0.2 ms | 🥶 | 1024 MB |
| 8.9 ms |  | 0.5 ms | 0 ms | 🥵 | 1024 MB |
| 121 ms | 23.4 ms | 0.7 ms | 0.4 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 1024 MB |
| 5.9 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.6 ms | 0.3 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 107 ms | 24.4 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 7.9 ms |  | 0.6 ms | 0.1 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 5.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 97.9 ms | 24.8 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 105 ms | 19.1 ms | 0.5 ms | 0.3 ms | 🥶 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 121.9 ms | 27 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 124 ms | 44.4 ms | 0.8 ms | 0.8 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 97 ms | 28.6 ms | 0.6 ms | 0.1 ms | 🥶 | 1024 MB |
| 90 ms | 22 ms | 0.4 ms | 0.4 ms | 🥶 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 110 ms | 19.2 ms | 0.6 ms | 0.3 ms | 🥶 | 1024 MB |
| 90 ms | 25.5 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 111.9 ms | 29.9 ms | 0.6 ms | 0.6 ms | 🥶 | 1024 MB |
| 88.9 ms | 26.5 ms | 0.5 ms | 0.2 ms | 🥶 | 1024 MB |
| 9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 127 ms | 17.6 ms | 0.6 ms | 0.3 ms | 🥶 | 1024 MB |
| 5.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 8.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 105 ms | 32.8 ms | 0.7 ms | 0.2 ms | 🥶 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 95.9 ms | 28.1 ms | 0.6 ms | 0.1 ms | 🥶 | 1024 MB |
| 31 ms |  | 0.5 ms | 0.2 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0 ms | 🥵 | 1024 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 153 ms | 19.9 ms | 0.4 ms | 0.1 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 98.9 ms | 30.1 ms | 0.6 ms | 0.4 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 11.9 ms |  | 0.5 ms | 0.4 ms | 🥵 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 105 ms | 18 ms | 0.6 ms | 0.2 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 11.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 1024 MB |
| 7.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 1024 MB |
| 92.9 ms | 17.3 ms | 0.5 ms | 0 ms | 🥶 | 1024 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 1024 MB |
| 100 ms | 20.6 ms | 0.6 ms | 0.4 ms | 🥶 | 1024 MB |
| 98.9 ms | 30.1 ms | 0.8 ms | 0.1 ms | 🥶 | 1024 MB |
| 104 ms | 17.6 ms | 0.5 ms | 0.3 ms | 🥶 | 1024 MB |
| 95.9 ms | 29 ms | 0.6 ms | 0.3 ms | 🥶 | 1024 MB |
| 363 ms | 19.6 ms | 0.7 ms | 0.7 ms | 🥶 | 1024 MB |
| 92 ms | 16 ms | 0.5 ms | 0.2 ms | 🥶 | 1024 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 82.9 ms | 26.6 ms | 0.6 ms | 0.3 ms | 🥶 | 1024 MB |
| 83.9 ms | 27.1 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 108.9 ms | 30.3 ms | 0.6 ms | 0.6 ms | 🥶 | 1024 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 1024 MB |
| 6 ms |  | 0.3 ms | 0 ms | 🥵 | 1024 MB |
| 100 ms | 27.5 ms | 0.5 ms | 0 ms | 🥶 | 1024 MB |
| 6 ms |  | 0.3 ms | 0.2 ms | 🥵 | 1024 MB |
| 104 ms | 32.7 ms | 0.5 ms | 0.1 ms | 🥶 | 1024 MB |
| 81 ms | 26.2 ms | 0.6 ms | 0.1 ms | 🥶 | 1024 MB |

## Results for 2048 MB

| Measurement (2048 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 9.6 ms |
| Average cold start response time | 98.1 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 17.9 ms |
| Fastest cold response time  | 78 ms |
| Slowest cold response time | 186 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 7.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 87.9 ms | 18.2 ms | 0.3 ms | 0 ms | 🥶 | 2048 MB |
| 125.9 ms | 23.1 ms | 0.8 ms | 0.2 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 114 ms | 26.1 ms | 0.9 ms | 0.5 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 2048 MB |
| 105 ms | 28.6 ms | 0.6 ms | 0.2 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 101.9 ms | 27.7 ms | 0.4 ms | 0.1 ms | 🥶 | 2048 MB |
| 95.9 ms | 27.7 ms | 0.5 ms | 0.3 ms | 🥶 | 2048 MB |
| 112.9 ms | 29.4 ms | 0.6 ms | 0.2 ms | 🥶 | 2048 MB |
| 6 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 2048 MB |
| 8.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 100 ms | 24.5 ms | 0.6 ms | 0.2 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 108 ms | 26.2 ms | 0.9 ms | 0.3 ms | 🥶 | 2048 MB |
| 107 ms | 26.3 ms | 0.6 ms | 0.5 ms | 🥶 | 2048 MB |
| 13 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 4.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 97 ms | 21.3 ms | 0.5 ms | 0.7 ms | 🥶 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 121.9 ms | 25.3 ms | 0.5 ms | 0.2 ms | 🥶 | 2048 MB |
| 5.9 ms |  | 0.4 ms | 0 ms | 🥵 | 2048 MB |
| 98 ms | 29.3 ms | 1 ms | 0.2 ms | 🥶 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 78 ms | 22.7 ms | 0.5 ms | 0.2 ms | 🥶 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 95.9 ms | 26.2 ms | 0.5 ms | 0.3 ms | 🥶 | 2048 MB |
| 5.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 88.9 ms | 21.8 ms | 0.4 ms | 0.2 ms | 🥶 | 2048 MB |
| 13 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 2048 MB |
| 11 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 104 ms | 17.4 ms | 0.4 ms | 0.1 ms | 🥶 | 2048 MB |
| 9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 16 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 4.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 8.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 88.9 ms | 22.3 ms | 0.4 ms | 0.1 ms | 🥶 | 2048 MB |
| 16.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 99.9 ms | 30.3 ms | 0.5 ms | 0.1 ms | 🥶 | 2048 MB |
| 126 ms | 21 ms | 0.6 ms | 0.4 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.5 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 97 ms | 27.4 ms | 0.5 ms | 0.3 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.3 ms | 🥵 | 2048 MB |
| 95 ms | 21.5 ms | 0.5 ms | 0.2 ms | 🥶 | 2048 MB |
| 17.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 107 ms | 31.1 ms | 0.3 ms | 0.2 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 5.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 8 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 186 ms | 17 ms | 0.5 ms | 0.2 ms | 🥶 | 2048 MB |
| 10.9 ms |  | 0.9 ms | 0.2 ms | 🥵 | 2048 MB |
| 90 ms | 23.2 ms | 0.7 ms | 0.4 ms | 🥶 | 2048 MB |
| 9.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 81 ms | 21.2 ms | 0.6 ms | 0.2 ms | 🥶 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 99.9 ms | 23.9 ms | 0.5 ms | 0.3 ms | 🥶 | 2048 MB |
| 101.9 ms | 19.8 ms | 0.6 ms | 0.5 ms | 🥶 | 2048 MB |
| 108.9 ms | 17.2 ms | 0.6 ms | 0 ms | 🥶 | 2048 MB |
| 97 ms | 26.3 ms | 0.4 ms | 0.2 ms | 🥶 | 2048 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.4 ms | 🥵 | 2048 MB |
| 9.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.6 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 7 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.5 ms | 0.2 ms | 🥵 | 2048 MB |
| 111 ms | 24.7 ms | 0.6 ms | 0.4 ms | 🥶 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0 ms | 🥵 | 2048 MB |
| 96.9 ms | 19.7 ms | 0.9 ms | 0.5 ms | 🥶 | 2048 MB |
| 16.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 79.9 ms | 18.6 ms | 1 ms | 0.7 ms | 🥶 | 2048 MB |
| 111 ms | 20.5 ms | 0.8 ms | 0.6 ms | 🥶 | 2048 MB |
| 9 ms |  | 0.6 ms | 0.1 ms | 🥵 | 2048 MB |
| 108 ms | 17.9 ms | 0.5 ms | 0.1 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 2048 MB |
| 5 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 93.9 ms | 21.2 ms | 0.5 ms | 0.6 ms | 🥶 | 2048 MB |
| 4.9 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 91 ms | 17.9 ms | 0.5 ms | 0.1 ms | 🥶 | 2048 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 2048 MB |
| 4.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 5.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 2048 MB |
| 101 ms | 25.5 ms | 0.7 ms | 0.1 ms | 🥶 | 2048 MB |
| 90 ms | 25.4 ms | 0.7 ms | 0.3 ms | 🥶 | 2048 MB |
| 10.9 ms |  | 0.3 ms | 0 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 111 ms | 25.3 ms | 0.4 ms | 0.2 ms | 🥶 | 2048 MB |
| 92 ms | 26.3 ms | 0.6 ms | 0.2 ms | 🥶 | 2048 MB |
| 99.9 ms | 26.3 ms | 0.7 ms | 0.4 ms | 🥶 | 2048 MB |
| 89.9 ms | 22.4 ms | 0.4 ms | 0.2 ms | 🥶 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 102.9 ms | 24.9 ms | 0.6 ms | 0.4 ms | 🥶 | 2048 MB |
| 105 ms | 24.6 ms | 0.5 ms | 0.4 ms | 🥶 | 2048 MB |
| 112.9 ms | 24.3 ms | 0.7 ms | 0.4 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.4 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 2048 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 2048 MB |
| 114 ms | 17.9 ms | 0.8 ms | 0.5 ms | 🥶 | 2048 MB |
| 106 ms | 26.1 ms | 0.7 ms | 0.4 ms | 🥶 | 2048 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |
| 16.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 2048 MB |
| 87.9 ms | 23.3 ms | 0.4 ms | 0.2 ms | 🥶 | 2048 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 2048 MB |

## Results for 3072 MB

| Measurement (3072 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 8.8 ms |
| Average cold start response time | 100.8 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 148 ms |
| Fastest cold response time  | 73 ms |
| Slowest cold response time | 467.9 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 107 ms | 18.1 ms | 0.5 ms | 0 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 7 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.3 ms | 0.3 ms | 🥵 | 3072 MB |
| 86.9 ms | 26.9 ms | 0.4 ms | 0.1 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 89.9 ms | 19.4 ms | 0.8 ms | 0.7 ms | 🥶 | 3072 MB |
| 9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 98 ms | 19.1 ms | 0.5 ms | 0.4 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.5 ms | 🥵 | 3072 MB |
| 125 ms | 18 ms | 0.4 ms | 0.2 ms | 🥶 | 3072 MB |
| 131.9 ms | 20.1 ms | 0.7 ms | 0.4 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 16.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 111.9 ms | 20.1 ms | 0.7 ms | 0.4 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 105 ms | 19.4 ms | 0.8 ms | 0.4 ms | 🥶 | 3072 MB |
| 105 ms | 19.5 ms | 0.7 ms | 0.3 ms | 🥶 | 3072 MB |
| 108 ms | 19 ms | 0.9 ms | 0.3 ms | 🥶 | 3072 MB |
| 82.9 ms | 20 ms | 1 ms | 0.3 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 97.9 ms | 20.9 ms | 0.4 ms | 0.2 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 97 ms | 20.1 ms | 0.6 ms | 0.4 ms | 🥶 | 3072 MB |
| 125 ms | 19.7 ms | 0.9 ms | 0.4 ms | 🥶 | 3072 MB |
| 98.9 ms | 18.4 ms | 0.5 ms | 0.3 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 85.9 ms | 17.4 ms | 0.3 ms | 0 ms | 🥶 | 3072 MB |
| 22 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 96.9 ms | 19.7 ms | 0.6 ms | 0.1 ms | 🥶 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 86.9 ms | 17.6 ms | 0.5 ms | 0.3 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 98 ms | 22.3 ms | 0.4 ms | 0.8 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 107 ms | 17.5 ms | 0.7 ms | 0.2 ms | 🥶 | 3072 MB |
| 95 ms | 19.9 ms | 0.6 ms | 0.3 ms | 🥶 | 3072 MB |
| 9.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 101 ms | 17.4 ms | 0.4 ms | 0.2 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 95 ms | 17.4 ms | 0.4 ms | 0.2 ms | 🥶 | 3072 MB |
| 109.9 ms | 21 ms | 0.4 ms | 0.3 ms | 🥶 | 3072 MB |
| 128.9 ms | 18.2 ms | 0.6 ms | 0.2 ms | 🥶 | 3072 MB |
| 7.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 5 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 7 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 89 ms | 17.7 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 92 ms | 19.9 ms | 0.6 ms | 0.3 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 110 ms | 20.6 ms | 0.6 ms | 0.6 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 98 ms | 20.9 ms | 0.6 ms | 0.4 ms | 🥶 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 88.9 ms | 17.9 ms | 0.4 ms | 0 ms | 🥶 | 3072 MB |
| 85 ms | 17.6 ms | 0.5 ms | 0.2 ms | 🥶 | 3072 MB |
| 92.9 ms | 19.9 ms | 0.7 ms | 0.4 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 3072 MB |
| 99.9 ms | 17.4 ms | 0.5 ms | 0.4 ms | 🥶 | 3072 MB |
| 95.9 ms | 19.3 ms | 0.6 ms | 0.4 ms | 🥶 | 3072 MB |
| 84.9 ms | 17.4 ms | 0.4 ms | 0.5 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 73 ms | 18.2 ms | 0.4 ms | 0.2 ms | 🥶 | 3072 MB |
| 105 ms | 36.8 ms | 0.5 ms | 0 ms | 🥶 | 3072 MB |
| 98.9 ms | 27.4 ms | 0.5 ms | 0.4 ms | 🥶 | 3072 MB |
| 6.9 ms |  | 0.7 ms | 0.2 ms | 🥵 | 3072 MB |
| 4.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 86.9 ms | 18.9 ms | 0.4 ms | 0.1 ms | 🥶 | 3072 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 111 ms | 27.9 ms | 0.7 ms | 0.2 ms | 🥶 | 3072 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 5.9 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 16 ms |  | 0.4 ms | 0 ms | 🥵 | 3072 MB |
| 98.9 ms | 20.5 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 90.9 ms | 18.8 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 6 ms |  | 0.5 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 7 ms |  | 0.3 ms | 0.2 ms | 🥵 | 3072 MB |
| 148 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 467.9 ms | 17.2 ms | 0.7 ms | 0.3 ms | 🥶 | 3072 MB |
| 5 ms |  | 0.3 ms | 0.1 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 3072 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.5 ms | 0.2 ms | 🥵 | 3072 MB |
| 88 ms | 18.3 ms | 0.5 ms | 0.4 ms | 🥶 | 3072 MB |
| 123 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 8 ms |  | 0.3 ms | 0 ms | 🥵 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.2 ms | 🥵 | 3072 MB |
| 107 ms | 19.5 ms | 0.6 ms | 0.4 ms | 🥶 | 3072 MB |
| 92.9 ms | 22.2 ms | 0.7 ms | 0.5 ms | 🥶 | 3072 MB |
| 9 ms |  | 0.6 ms | 0 ms | 🥵 | 3072 MB |
| 89.9 ms | 20.1 ms | 0.5 ms | 0.1 ms | 🥶 | 3072 MB |
| 97 ms | 17.7 ms | 0.6 ms | 0.5 ms | 🥶 | 3072 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 3072 MB |

## Results for 4096 MB

| Measurement (4096 MB) | Time (ms) |
|-------------|------|
| Average warm start response time | 11 ms |
| Average cold start response time | 98.7 ms |
| Fastest warm response time | 4.9 ms |
| Slowest warm response time | 37 ms |
| Fastest cold response time  | 81 ms |
| Slowest cold response time | 124 ms |
  

| Response time | Initialization | Invocation | Overhead | Cold/ Warm Start | Memory Size |
|---------------|----------------|------------|----------|------------------|-------------|
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 4.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 102.9 ms | 19.6 ms | 0.5 ms | 0.3 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.3 ms | 🥵 | 4096 MB |
| 92 ms | 20.5 ms | 0.7 ms | 0.4 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 95.9 ms | 21 ms | 0.5 ms | 0 ms | 🥶 | 4096 MB |
| 100 ms | 19.1 ms | 0.7 ms | 0.4 ms | 🥶 | 4096 MB |
| 124 ms | 20.1 ms | 0.6 ms | 0.1 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 104.9 ms | 21.7 ms | 0.6 ms | 0.3 ms | 🥶 | 4096 MB |
| 89.9 ms | 17.6 ms | 0.5 ms | 0.3 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 91 ms | 20.6 ms | 0.9 ms | 0.7 ms | 🥶 | 4096 MB |
| 9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |
| 34 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.5 ms | 0 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 98.9 ms | 19.8 ms | 0.7 ms | 0.2 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 81 ms | 18.6 ms | 0.6 ms | 0.2 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 124 ms | 25.2 ms | 8.5 ms | 0.9 ms | 🥶 | 4096 MB |
| 89.9 ms | 18.5 ms | 0.5 ms | 0.3 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 103.9 ms | 16.7 ms | 0.5 ms | 0.4 ms | 🥶 | 4096 MB |
| 7 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 99.9 ms | 19.6 ms | 0.7 ms | 0.5 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.5 ms | 0.2 ms | 🥵 | 4096 MB |
| 92 ms | 18.7 ms | 0.5 ms | 0.2 ms | 🥶 | 4096 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.6 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 13 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 105.9 ms | 20.4 ms | 0.5 ms | 0.5 ms | 🥶 | 4096 MB |
| 97.9 ms | 21.7 ms | 0.4 ms | 0.3 ms | 🥶 | 4096 MB |
| 111.9 ms | 20.1 ms | 0.6 ms | 0.4 ms | 🥶 | 4096 MB |
| 5.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 85.9 ms | 19.5 ms | 0.6 ms | 0.4 ms | 🥶 | 4096 MB |
| 105.9 ms | 22.1 ms | 0.7 ms | 0.4 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 88.9 ms | 19.1 ms | 0.6 ms | 0.1 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 90.9 ms | 19.8 ms | 0.4 ms | 0.1 ms | 🥶 | 4096 MB |
| 123.9 ms | 19.4 ms | 0.4 ms | 0.1 ms | 🥶 | 4096 MB |
| 108 ms | 18.3 ms | 0.4 ms | 0.2 ms | 🥶 | 4096 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |
| 106.9 ms | 18.5 ms | 0.7 ms | 0.4 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.6 ms | 0.2 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |
| 110 ms | 19.9 ms | 0.5 ms | 0.1 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 7 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 94 ms | 19.3 ms | 1 ms | 0.6 ms | 🥶 | 4096 MB |
| 93.9 ms | 18.9 ms | 0.6 ms | 0.4 ms | 🥶 | 4096 MB |
| 100.9 ms | 20.3 ms | 0.6 ms | 0.1 ms | 🥶 | 4096 MB |
| 95 ms | 18.4 ms | 0.4 ms | 0.4 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 98.9 ms | 21.9 ms | 0.5 ms | 0.2 ms | 🥶 | 4096 MB |
| 19.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 19 ms |  | 0.7 ms | 0.2 ms | 🥵 | 4096 MB |
| 93.9 ms | 19.7 ms | 0.6 ms | 0.2 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 13 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 5.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 37 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 18.9 ms |  | 0.4 ms | 0 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 98 ms | 17.7 ms | 0.6 ms | 0.5 ms | 🥶 | 4096 MB |
| 8 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 7 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.5 ms | 0.1 ms | 🥵 | 4096 MB |
| 8 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 87 ms | 18.4 ms | 0.5 ms | 0.3 ms | 🥶 | 4096 MB |
| 13 ms |  | 0.5 ms | 0.2 ms | 🥵 | 4096 MB |
| 113 ms | 17.9 ms | 0.4 ms | 0.2 ms | 🥶 | 4096 MB |
| 9.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 5 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 118.9 ms | 22.1 ms | 0.7 ms | 0.4 ms | 🥶 | 4096 MB |
| 86.9 ms | 19.1 ms | 0.5 ms | 0.4 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 98 ms | 20.2 ms | 0.5 ms | 1.2 ms | 🥶 | 4096 MB |
| 95 ms | 18.7 ms | 1.3 ms | 0.5 ms | 🥶 | 4096 MB |
| 7.9 ms |  | 0.4 ms | 0.3 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.6 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 100.9 ms | 20.5 ms | 0.5 ms | 0.6 ms | 🥶 | 4096 MB |
| 8 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 5 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 7 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 87.9 ms | 17.4 ms | 0.8 ms | 0.3 ms | 🥶 | 4096 MB |
| 88.9 ms | 20.4 ms | 0.5 ms | 1.2 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 85.9 ms | 18.8 ms | 0.4 ms | 0.1 ms | 🥶 | 4096 MB |
| 11.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 7.9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 118.9 ms | 20.6 ms | 0.6 ms | 0.2 ms | 🥶 | 4096 MB |
| 6.9 ms |  | 0.3 ms | 0 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 9 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 97 ms | 20.2 ms | 0.5 ms | 0.1 ms | 🥶 | 4096 MB |
| 96.9 ms | 17.8 ms | 0.5 ms | 0.4 ms | 🥶 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 5 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |
| 6.9 ms |  | 0.4 ms | 0.2 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.4 ms | 0.1 ms | 🥵 | 4096 MB |
| 6 ms |  | 0.3 ms | 0.2 ms | 🥵 | 4096 MB |
| 16 ms |  | 0.3 ms | 0.1 ms | 🥵 | 4096 MB |


## XRay Example of a Cold Start

<img width="1476" alt="Screenshot 2020-10-07 at 23 01 40" src="https://user-images.githubusercontent.com/1189998/95387505-178a1d00-08f1-11eb-83a7-7bc32eee48e2.png">

## XRay Example of a Warm Start

<img width="1479" alt="Screenshot 2020-10-07 at 23 01 23" src="https://user-images.githubusercontent.com/1189998/95387509-1953e080-08f1-11eb-8d46-ac25efa235e4.png">
