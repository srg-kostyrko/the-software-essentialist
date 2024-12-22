interface SequenceStats {
  min: number;
  max: number;
  size: number;
  avg: number;
}

export function calcualteSequenceStats(input: number[]): SequenceStats {
  const size = input.length;

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let num of input) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  return {
    min: size > 0 ? min : 0,
    max: size > 0 ? max : 0,
    size: input.length,
    avg: size > 0 ? sum / size : 0,
  };
}
