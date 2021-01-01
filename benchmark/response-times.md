## Response Times

The following are the response time results from AWS XRay, generated after running `npm run benchmark`.

| Response time | Initialization | Invocation | Overhead | Cold Start | Warm Start |
|---------------|----------------|------------|----------|------------|------------|
| 153 ms | 1.6 ms | 0.6 ms | 10.5 ms | 🥶 |  |
| 7.9 ms |  | 0.6 ms | 0.2 ms |  | 🥵 |
| 8 ms |  | 0.3 ms | 0.1 ms |  | 🥵 |
| 7.9 ms |  | 0.3 ms | 0.2 ms |  | 🥵 |
| 8 ms |  | 0.4 ms | 0 ms |  | 🥵 |
| 8 ms |  | 0.5 ms | 0.1 ms |  | 🥵 |
| 36.9 ms |  | 20.3 ms | 0.1 ms |  | 🥵 |
| 7 ms |  | 0.3 ms | 0.2 ms |  | 🥵 |
| 82.9 ms |  | 17.5 ms | 59.9 ms |  | 🥵 |
| 9.9 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 128 ms | 1.7 ms | 0.4 ms | 0.2 ms | 🥶 |  |
| 13.9 ms |  | 6.9 ms | 0.1 ms |  | 🥵 |
| 6.9 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 22 ms |  | 15.3 ms | 0.1 ms |  | 🥵 |
| 9 ms |  | 0.6 ms | 0.2 ms |  | 🥵 |
| 7.9 ms |  | 0.3 ms | 0.1 ms |  | 🥵 |
| 9 ms |  | 0.3 ms | 0.1 ms |  | 🥵 |
| 9.9 ms |  | 1.8 ms | 0.3 ms |  | 🥵 |
| 6.9 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 164.9 ms | 1.8 ms | 0.4 ms | 0.1 ms | 🥶 |  |
| 6.9 ms |  | 0.3 ms | 0.4 ms |  | 🥵 |
| 42 ms |  | 34.2 ms | 0.1 ms |  | 🥵 |
| 7.9 ms |  | 0.4 ms | 0.3 ms |  | 🥵 |
| 8 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 7.9 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 6.9 ms |  | 0.3 ms | 0.2 ms |  | 🥵 |
| 148 ms | 2.2 ms | 0.6 ms | 0.5 ms | 🥶 |  |
| 6 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 56.9 ms |  | 29.5 ms | 19.7 ms |  | 🥵 |
| 46.9 ms |  | 20.3 ms | 19.9 ms |  | 🥵 |
| 24 ms |  | 16.9 ms | 0.4 ms |  | 🥵 |
| 157 ms | 1.9 ms | 0.4 ms | 0.4 ms | 🥶 |  |
| 7.9 ms |  | 0.3 ms | 0.2 ms |  | 🥵 |
| 6.9 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 7.9 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 13 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 167 ms | 1.8 ms | 0.4 ms | 0.1 ms | 🥶 |  |
| 25 ms |  | 18.5 ms | 0.2 ms |  | 🥵 |
| 15 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 37.9 ms |  | 30.9 ms | 0.1 ms |  | 🥵 |
| 45 ms |  | 37.9 ms | 0.3 ms |  | 🥵 |
| 7.9 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 8 ms |  | 0.3 ms | 0.1 ms |  | 🥵 |
| 167 ms | 1.9 ms | 0.7 ms | 0.5 ms | 🥶 |  |
| 151.9 ms | 2 ms | 0.7 ms | 0.2 ms | 🥶 |  |
| 7.9 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 8.9 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 120.9 ms | 2 ms | 0.4 ms | 0.3 ms | 🥶 |  |
| 35 ms |  | 8.5 ms | 19.5 ms |  | 🥵 |
| 6.9 ms |  | 0.5 ms | 0.1 ms |  | 🥵 |
| 15 ms |  | 5.3 ms | 0.2 ms |  | 🥵 |
| 7.9 ms |  | 0.4 ms | 0.3 ms |  | 🥵 |
| 19 ms |  | 11.7 ms | 0.2 ms |  | 🥵 |
| 7.9 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |
| 157 ms | 1.6 ms | 0.4 ms | 0.2 ms | 🥶 |  |
| 7 ms |  | 0.3 ms | 0 ms |  | 🥵 |
| 8.9 ms |  | 0.3 ms | 0.1 ms |  | 🥵 |
| 18 ms |  | 0.4 ms | 0.1 ms |  | 🥵 |

## XRay Example of a Cold Start

<img width="1476" alt="Screenshot 2020-10-07 at 23 01 40" src="https://user-images.githubusercontent.com/1189998/95387505-178a1d00-08f1-11eb-83a7-7bc32eee48e2.png">

## XRay Example of a Warm Start

<img width="1479" alt="Screenshot 2020-10-07 at 23 01 23" src="https://user-images.githubusercontent.com/1189998/95387509-1953e080-08f1-11eb-8d46-ac25efa235e4.png">

