import { resolveBooleanExpression } from "./index";

describe("boolean calculator", () => {
  describe("process literals", () => {
    it.each([
      ["TRUE", true],
      ["FALSE", false],
    ])("knows that %s resolves to %s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("NOT operator", () => {
    it.each([
      ["NOT TRUE", false],
      ["NOT FALSE", true],
    ])("knows that %s resolves to %s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("AND operator", () => {
    it.each([
      ["TRUE AND TRUE", true],
      ["TRUE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["FALSE AND FALSE", false],
    ])("knows that %s resolves to %s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("OR operator", () => {
    it.each([
      ["TRUE OR TRUE", true],
      ["TRUE OR FALSE", true],
      ["FALSE OR TRUE", true],
      ["FALSE OR FALSE", false],
    ])("knows that %s resolves to %s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("operators w/ precedence (NOT -> AND -> OR)", () => {
    it.each([
      ["TRUE AND NOT FALSE", true],
      ["FALSE OR NOT FALSE", true],
      ["TRUE OR TRUE AND FALSE", false],
      ["TRUE OR FALSE AND NOT FALSE", true],
    ])("knows that %s resolves to %s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("parenteses", () => {
    it.each([
      ["TRUE OR (TRUE AND FALSE)", true],
      ["NOT (TRUE AND FALSE)", true],
      ["(TRUE OR FALSE) AND (FALSE OR TRUE)", true],
      ["NOT (TRUE AND NOT (TRUE OR TRUE))", true],
    ])("knows that %s resolves to %s", (expression, result) => {
      expect(resolveBooleanExpression(expression)).toBe(result);
    });
  });

  describe("errors", () => {
    it.each(["NOT", "TRUE AND", "AND TRUE", "TRUE OR", "OR TRUE", "(TRUE", "TRUE)"])(
      "knows that %s throws an error",
      (expression) => {
        expect(() => {
          resolveBooleanExpression(expression);
        }).toThrow("Unexpected end of expression");
      }
    );
  });
});
