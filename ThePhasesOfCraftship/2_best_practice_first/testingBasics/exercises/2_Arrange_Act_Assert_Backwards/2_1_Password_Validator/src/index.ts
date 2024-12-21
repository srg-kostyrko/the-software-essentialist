export type ValidationResult =
  | {
      valid: true;
    }
  | {
      valid: false;
      errors: Array<string>;
    };

export function validatePassword(password: string): ValidationResult {
  return {
    valid: false,
    errors: ["InvalidPasswordLength"],
  };
}
