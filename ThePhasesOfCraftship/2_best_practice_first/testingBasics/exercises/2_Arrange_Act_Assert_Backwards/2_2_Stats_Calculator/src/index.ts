interface SequenceStats {
  min: number;
  max: number;
  size: number;
  avg: number;
}

export function calcualteSequenceStats(input: number[]): SequenceStats {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let num of input) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  return {
    min: input.length > 0 ? min : 0,
    max: input.length > 0 ? max : 0,
    size: input.length,
    avg: input.length > 0 ? sum / input.length : 0,
  };
}
