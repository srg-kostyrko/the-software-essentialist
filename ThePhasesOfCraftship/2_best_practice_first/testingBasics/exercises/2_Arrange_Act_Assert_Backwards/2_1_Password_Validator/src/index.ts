export type ValidationResult =
  | {
      valid: true;
    }
  | {
      valid: false;
      errors: Array<string>;
    };

export function validatePassword(password: string): ValidationResult {
  if (password.length < 5 || password.length > 15) {
    return {
      valid: false,
      errors: ["InvalidPasswordLength"],
    };
  }

  return {
    valid: true,
  }
}
