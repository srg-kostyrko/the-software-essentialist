interface SequenceStats {
  min: number;
  max: number;
  size: number;
  avg: number;
}

export function calcualteSequenceStats(input: number[]): SequenceStats {
  let min = Infinity;
  for (let num of input) {
    if (num < min) min = num;
  }

  return {
    min: input.length > 0 ? min : 0,
    max: Infinity,
    size: -1,
    avg: Infinity,
  };
}
