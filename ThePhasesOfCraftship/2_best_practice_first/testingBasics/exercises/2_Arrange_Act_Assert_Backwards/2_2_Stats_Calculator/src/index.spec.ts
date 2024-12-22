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
    it("knows that min of empty sequence is 0", () => {
      expect(calcualteSequenceStats([]).min).toBe(0);
    });

    it("knwos that min of positive number sequence is lowest number", () => {
      expect(calcualteSequenceStats([2, 1, 5]).min).toBe(1);
    });

    it("knows that min of positive number sequence with 0 is 0", () => {
      expect(calcualteSequenceStats([2, 1, 0, 5]).min).toBe(0);
    });

    it("knows that min of negative number sequence is lowest number", () => {
      expect(calcualteSequenceStats([-2, -1, -5]).min).toBe(-5);
    });
  });
});
