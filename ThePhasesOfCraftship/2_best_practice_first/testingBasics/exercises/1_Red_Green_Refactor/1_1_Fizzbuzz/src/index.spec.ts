import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it('should return "Fizz" when passed 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it('should return "Fizz" when passed multiples of 3', () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  })
});
