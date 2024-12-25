import { resolveBooleanExpression } from "./index";

describe("boolean calculator", () => {
  describe("process literals", () => {
    it.each([
      ["TRUE", true],
      ["FALSE", false],
    ])("knows that $s resolves to $s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("NOT operator", () => {
    it.each([
      ["NOT TRUE", false],
      ["NOT FALSE", true],
    ])("knows that $s resolves to $s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("AND operator", () => {
    it.each([
      ["TRUE AND TRUE", true],
      ["TRUE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["FALSE AND FALSE", false],
    ])("knows that $s resolves to $s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("OR operator", () => {
    it.each([
      ["TRUE OR TRUE", true],
      ["TRUE OR FALSE", true],
      ["FALSE OR TRUE", true],
      ["FALSE OR FALSE", false],
    ])("knows that $s resolves to $s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });
});
