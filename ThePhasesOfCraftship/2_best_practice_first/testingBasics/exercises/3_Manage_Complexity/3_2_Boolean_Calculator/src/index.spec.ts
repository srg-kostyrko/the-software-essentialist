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
});
