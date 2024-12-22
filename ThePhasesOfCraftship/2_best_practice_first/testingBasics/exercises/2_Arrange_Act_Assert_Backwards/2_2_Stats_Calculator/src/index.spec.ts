import { calcualteSequenceStats } from "./index";

describe("stats calculator", () => {
  it("returns correct shape", () => {
    const result = calcualteSequenceStats([]);

    expect(result).toHaveProperty("min");
    expect(result).toHaveProperty("max");
    expect(result).toHaveProperty("size");
    expect(result).toHaveProperty("avg");
  });
});
