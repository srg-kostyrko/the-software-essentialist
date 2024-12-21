export type ValidationResult =
  | {
      valid: true;
    }
  | {
      valid: false;
      errors: Array<string>;
    };

export enum PasswordValidationErrors {
  InvalidPasswordLength = "InvalidPasswordLength",
}

export function validatePassword(password: string): ValidationResult {
  if (password.length < 5 || password.length > 15) {
    return {
      valid: false,
      errors: [PasswordValidationErrors.InvalidPasswordLength],
    };
  }

  return {
    valid: true,
  };
}
