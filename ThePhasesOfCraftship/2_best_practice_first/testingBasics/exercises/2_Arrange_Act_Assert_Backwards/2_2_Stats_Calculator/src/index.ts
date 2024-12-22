interface SequenceStats {
  min: number;
  max: number;
  size: number;
  avg: number;
}

export function calcualteSequenceStats(input: number[]): SequenceStats {
  return {
    min: 0,
    max: Infinity,
    size: -1,
    avg: Infinity,
  };
}
