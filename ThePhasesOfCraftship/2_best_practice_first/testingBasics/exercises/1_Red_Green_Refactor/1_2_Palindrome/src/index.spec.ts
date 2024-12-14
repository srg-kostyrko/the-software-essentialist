import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  test.each([
    ["mom", "is", true],
    ["Mom", "is", true],
    ["MoM", "is", true],
    ["Momx", "isn't", false],
    ["xMomx", "is", true],
    ["Was It A Rat I Saw", "is", true],
    ["Never Odd or Even", "is", true],
    ["Never Odd or Even1", "isn't", false],
    ["1Never Odd or Even1", "is", true],
  ])("knows that '%s' %s a palindrome", (input, _, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
