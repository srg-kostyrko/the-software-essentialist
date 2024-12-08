import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it('should return "fizz" when passed 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
});
