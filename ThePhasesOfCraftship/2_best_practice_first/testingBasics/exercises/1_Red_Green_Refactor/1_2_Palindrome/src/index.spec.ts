import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("knows that 'mom' is a palindrome", () => {
    expect(isPalindrome("mom")).toBe(true);
  });

  it("knows that 'Mom' is a palindrome", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("knows that 'Was It A Rat I Saw' is a palindrome", () => {
    expect(isPalindrome("Was It A Rat I Saw")).toBe(true);
  });
});
