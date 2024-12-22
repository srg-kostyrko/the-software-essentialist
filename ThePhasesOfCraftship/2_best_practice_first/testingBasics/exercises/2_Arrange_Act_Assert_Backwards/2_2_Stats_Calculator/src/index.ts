interface SequenceStats {
  min: number;
  max: number;
  size: number;
  avg: number;
}

export function calcualteSequenceStats(input: number[]): SequenceStats {
  return {
    min: -Infinity,
    max: Infinity,
    size: -1,
    avg: Infinity,
  };
}
