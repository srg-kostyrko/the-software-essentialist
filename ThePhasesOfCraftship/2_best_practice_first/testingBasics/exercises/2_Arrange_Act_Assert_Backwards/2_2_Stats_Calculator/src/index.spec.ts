import { calcualteSequenceStats } from "./index";

describe("stats calculator", () => {
  it("returns correct shape", () => {
    const result = calcualteSequenceStats([]);

    expect(result).toHaveProperty("min");
    expect(result).toHaveProperty("max");
    expect(result).toHaveProperty("size");
    expect(result).toHaveProperty("avg");
  });

  describe("min calculation", () => {
    it.each([
      [[], 0],
      [[2, 1, 5], 1],
      [[2, 1, 0, 5], 0],
      [[-2, -1, -5], -5],
      [[2, 4, 21, -8, 53, 40], -8],
    ])("knows that min of %s is %s", (input: number[], expected: number) => {
      expect(calcualteSequenceStats(input).min).toBe(expected);
    });
  });

  describe("max calculation", () => {
    it.each([
      [[], 0],
      [[-1, 2, 0, 5, 1], 5],
      [[-1, 0, -4], 0],
      [[-2, -3, -5], -2],
      [[2, 5, 2], 5],
      [[2, 4, 21, -8, 53, 40], 53],
    ])("knows that max of %s is %s", (input: number[], expected: number) => {
      expect(calcualteSequenceStats(input).max).toBe(expected);
    });
  });

  describe("size calculation", () => {
    it.each([
      [[], 0],
      [[-1, 2, 0, 5, 1], 5],
      [[-1, 0, -4], 3],
      [[-2, -3, -5], 3],
      [[2, 5, 2], 3],
      [[2, 4, 21, -8, 53, 40], 6],
    ])("knows that size of %s is %s", (input: number[], expected: number) => {
      expect(calcualteSequenceStats(input).size).toBe(expected);
    });
  });

  describe("avg calculation", () => {
    it.each([
      [[], 0],
      [[2], 2],
      [[1, 2, 3], 2],
      [[-1, 0, 1], 0],
      [[-5, 2, 4, 1], 0.5],
      [[2, 4, 21, -8, 53, 40], 18.666666666667],
    ])("knows that avg of %s is %s", (input: number[], expected: number) => {
      expect(calcualteSequenceStats(input).avg).toBeCloseTo(expected);
    });
  });
});
