import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it.each([
    [1, "1"],
    [3, "Fizz"],
    [4, "4"],
    [5, "Buzz"],
    [6, "Fizz"],
    [9, "Fizz"],
    [10, "Buzz"],
    [11, "11"],
    [12, "Fizz"],
    [13, "13"],
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
  ])("for %s it should return `%s`", (input, expected) => {
    expect(fizzbuzz(input)).toBe(expected);
  });

  it("should throw an error for numbers > 100", () => {
    expect(() => fizzbuzz(101)).toThrowError(RangeError);
  });

  it("should throw an error for numbers < 1", () => {
    expect(() => fizzbuzz(-1)).toThrowError(RangeError);
  });

  it("should throw an error for non-numbers", () => {
    expect(() => fizzbuzz("a" as any)).toThrowError(TypeError);
  });
});
