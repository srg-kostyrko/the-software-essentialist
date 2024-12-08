import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  describe("it should return Fizz for multiples of 3", () => {
    it.each([3, 6, 9, 12])("for %s it should return `Fizz`", (input) => {
      expect(fizzbuzz(input)).toBe("Fizz");
    });
  });

  describe("it should return Buzz for multiples of 5", () => {
    it.each([5, 10, 20, 25])("for %s it should return `Buzz`", (input) => {
      expect(fizzbuzz(input)).toBe("Buzz");
    });
  });

  describe("it should return FizzBuzz for multiples of 3 and 5", () => {
    it.each([15, 30, 45])("for %s it should return `FizzBuzz`", (input) => {
      expect(fizzbuzz(input)).toBe("FizzBuzz");
    });
  });

  describe("it should return the number for non-multiples of 3 or 5", () => {
    it.each([1, 2, 4, 7, 13])(
      "for %s it should return `%s`",
      (input) => {
        expect(fizzbuzz(input)).toBe(String(input));
      }
    );
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
