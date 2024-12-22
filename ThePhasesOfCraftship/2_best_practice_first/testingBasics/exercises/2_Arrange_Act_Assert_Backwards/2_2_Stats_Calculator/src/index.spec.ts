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
    ])("knows that min of %s is %s", (input: number[], expected: number) => {
      expect(calcualteSequenceStats(input).min).toBe(expected);
    });
  });
});
