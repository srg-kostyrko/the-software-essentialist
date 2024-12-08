export function fizzbuzz(number: number): string {
  if (typeof number !== "number") throw new TypeError("Input must be a number");
  if (number < 1) throw new RangeError("Number must be greater than 0");
  if (number > 100) throw new RangeError("Number must be less than 100");

  const isMultipleOf3 = number % 3 === 0;
  const isMultipleOf5 = number % 5 === 0;

  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz";
  if (isMultipleOf3) return "Fizz";
  if (isMultipleOf5) return "Buzz";
  
  return String(number);
}