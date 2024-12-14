export function isPalindrome(input: string): boolean {
  return (
    input.toLocaleLowerCase() ===
    input.toLocaleLowerCase().split("").reverse().join("")
  );
}
