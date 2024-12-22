Process a sequence of integer numbers to determine the following statistics

- min
  - [] -> 0
  - [2, 1, 0, -1, 5] -> -1
  - [2, 1, 0, -1, -5] -> -5
  - [2, 1, 0, 5] -> 0
  - [2, 1, 5] -> 1
  - [2, 5, 2] -> 2
- max
  - [] -> 0
  - [-1, 2, 0, 5, 1] -> 5
  - [-1, 0, -4] -> 0
  - [-2, -3, -5] -> -2
  - [2, 5, 2] -> 2
- number of elements
  - [] -> 0
  - [1, 2] -> 2
- average
  - [] -> 0
  - [2] -> 2
  - [1, 2, 3] -> 2
  - [-1, 0, 1] -> 0
  - [-5, 2, 4, 1] -> 0.5

```ts
interface SequenceStats {
  min: number;
  max: number;
  size: number;
  avg: number;
}

function calcualteSequenceStats(input: number[]): SequenceStats {}
```