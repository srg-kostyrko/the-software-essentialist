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
      if (expectedErrors.length === 0) {
        expect(result).not.toHaveProperty("errors");
      } else {
        expect(result).toHaveProperty("errors");
      }
      if (!result.valid) {
        expect(result.errors).toHaveLength(expectedErrors.length);
        for (const expectedError of expectedErrors) {
          expect(result.errors).toContain(expectedError);
        }
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
    runPasswordValidationTests([
      [
        "a",
        "invalid",
        [
          PasswordValidationErrors.InvalidPasswordLength,
          PasswordValidationErrors.ContainsNoDigits,
          PasswordValidationErrors.ContainsNoUppercaseLetters,
        ],
      ],
      [
        "thephysical1234567",
        "invalid",
        [
          PasswordValidationErrors.ContainsNoUppercaseLetters,
          PasswordValidationErrors.InvalidPasswordLength,
        ],
      ],
    ]);
  });
});
