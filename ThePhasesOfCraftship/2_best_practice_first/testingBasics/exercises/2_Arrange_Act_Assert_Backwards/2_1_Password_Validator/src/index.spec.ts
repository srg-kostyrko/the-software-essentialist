import { PasswordValidationErrors, validatePassword } from "./index";

function runPasswordValidationTests(
  cases: Array<[string, string, Array<PasswordValidationErrors>]>
) {
  it.each(cases)(
    "knows that `%s` is %s",
    (
      password: string,
      _result: string,
      expectedErrors: Array<PasswordValidationErrors>
    ) => {
      const result = validatePassword(password);

      expect(result.valid).toBe(expectedErrors.length === 0);
      if (!result.valid) {
        expect(result.errors).toHaveLength(expectedErrors.length);
        expect(result.errors).toEqual(expectedErrors);
      } else {
        expect("errors" in result).toBe(false);
      }
    }
  );
}

describe("password validator", () => {
  describe("validate length is between 5 and 15", () => {
    runPasswordValidationTests([
      ["aD2", "invalid", [PasswordValidationErrors.InvalidPasswordLength]],
      ["aD2345", "valid", []],
      [
        "thePhysical1234567",
        "invalid",
        [PasswordValidationErrors.InvalidPasswordLength],
      ],
    ]);
  });

  describe("validate contains at least one digit", () => {
    runPasswordValidationTests([
      ["maxwellTheBe", "invalid", [PasswordValidationErrors.ContainsNoDigits]],
      ["aD1234", "valid", []],
    ]);
  });

  describe("validate contains at least one upper case letter", () => {
    runPasswordValidationTests([
      [
        "maxwell1_c",
        "invalid",
        [PasswordValidationErrors.ContainsNoUppercaseLetters],
      ],
      ["AD1234", "valid", []],
    ]);
  });

  describe("returns all errors", () => {
    it("knows that `a` is not valid", () => {
      const result = validatePassword("a");

      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.errors).toHaveLength(3);
        expect(result.errors).toContain(
          PasswordValidationErrors.InvalidPasswordLength
        );
        expect(result.errors).toContain(
          PasswordValidationErrors.ContainsNoDigits
        );
        expect(result.errors).toContain(
          PasswordValidationErrors.ContainsNoUppercaseLetters
        );
      }
    });
  });
});
