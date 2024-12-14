import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("knows that 'mom' is a palindrome", () => {
    expect(isPalindrome("mom")).toBe(true);
  });
});
