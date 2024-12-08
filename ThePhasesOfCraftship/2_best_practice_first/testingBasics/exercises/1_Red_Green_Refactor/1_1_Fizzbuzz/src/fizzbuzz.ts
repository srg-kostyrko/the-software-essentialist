export function fizzbuzz(number: number): string {
  if (number % 3 === 0) return "Fizz";
  if (number === 5) return "Buzz";
  return "";
}