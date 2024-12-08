export function fizzbuzz(number: number): string {
  if (number > 100) throw new RangeError("Number must be less than 100");
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return String(number);
}