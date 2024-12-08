import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return string representation of number", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it('should return "Fizz" when passed 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it('should return "Fizz" when passed multiples of 3', () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  it('should return "Buzz" when passed 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it('should return "Buzz" when passed multiples of 5', () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  it('should return "FizzBuzz" when passed 15', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it('should return "FizzBuzz" when passed multiples of 3 and 5', () => {
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });
});
