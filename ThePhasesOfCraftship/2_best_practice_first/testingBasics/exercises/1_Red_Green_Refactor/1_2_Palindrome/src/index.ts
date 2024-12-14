export function isPalindrome(input: string): boolean {
  const prepared = removeNonAlphaNumeric(input.toLocaleLowerCase());
  return prepared === reverseString(prepared);
}

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

function removeNonAlphaNumeric(input: string): string {
  return input.replace(/[^a-z0-9]/g, "");
}