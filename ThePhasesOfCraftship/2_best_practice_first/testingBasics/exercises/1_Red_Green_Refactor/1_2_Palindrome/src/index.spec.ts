import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  describe("palindrome is a word reversed", () => {
    test.each([
      ["mom", "is"],
      ["wow", "is"],
      ["bill", "isn't"],
    ])("knows that '%s' %s a palindrome", (input, expected) => {
      expect(isPalindrome(input)).toBe(expected === "is");
    });
  });
  describe("case does not matter", () => {
    test.each([
      ["mom", "is"],
      ["Mom", "is"],
      ["MoM", "is"],
      ["Momx", "isn't"],
    ])("knows that '%s' %s a palindrome", (input, expected) => {
      expect(isPalindrome(input)).toBe(expected === "is");
    });
  });
  describe("only alphanumeric characters matter", () => {
    test.each([
      ["Was It A Rat I Saw", "is", true],
      ["Never Odd or Even", "is", true],
      ["Never Odd or Even1", "isn't", false],
      ["1Never Odd or Even1", "is", true],
    ])("knows that '%s' %s a palindrome", (input, expected) => {
      expect(isPalindrome(input)).toBe(expected === "is");
    });
  });
});
