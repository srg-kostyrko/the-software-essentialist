/**
 * Function to validate a password.
 * Criterias:
 * Between 5 and 15 characters long
 * - "aD2" - not valid
 * - "aD2345" - valid
 * - "aD23456789123456" - not valid
 * Contains at least one digit
 * - "aDabcd" - not valid
 * - "aD1234" - valid
 * Contains at least one upper case letter
 * - "ad1234" - not valid
 * - "AD1234" - valid
 * Return an object containing a boolean result and an errors key that —
 * when provided with an invalid password — contains an error message or type for all errors in occurrence.
 * There can be multiple errors at a single time.
 *
 * type ValidationResult = {
 *    valid: true;
 * } | {
 *    valid: false;
 *    errors: Array<string>;
 * }
 * function validatePassword(password: string): ValidationResult {}
 */

import { validatePassword } from "./index";

describe("password validator", () => {
  describe("validate length is between 5 and 15", () => {
    it("knows that `aD2` is not valid", () => {
      const result = validatePassword("aD2");

      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.errors).toHaveLength(1);
        expect(result.errors[0]).toBe("InvalidPasswordLength");
      }
    });

    it("knows that `aD2345` is valid", () => {
      const result = validatePassword("aD2345");

      expect(result.valid).toBe(true);
      expect("errors" in result).toBe(false);
    });
  });
});
