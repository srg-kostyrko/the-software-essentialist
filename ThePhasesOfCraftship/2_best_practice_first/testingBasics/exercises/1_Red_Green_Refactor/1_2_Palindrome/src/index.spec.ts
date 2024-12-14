import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("knows that 'mom' is a palindrome", () => {
    expect(isPalindrome("mom")).toBe(true);
  });

  it("knows that 'Mom' is a palindrome", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });
});
