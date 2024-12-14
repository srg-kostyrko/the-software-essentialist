export function isPalindrome(input: string): boolean {
  return (
    input.toLocaleLowerCase().replace(/[^a-z0-9]/g, "") ===
    input
      .toLocaleLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .reverse()
      .join("")
  );
}
