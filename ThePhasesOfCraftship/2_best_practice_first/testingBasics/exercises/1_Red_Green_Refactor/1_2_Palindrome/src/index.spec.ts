import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  test.each([
    ["mom", "is", true],
    ["Mom", "is", true],
    ["Was It A Rat I Saw", "is", true],
  ])("knows that '%s' %s a palindrome", (input, _, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
