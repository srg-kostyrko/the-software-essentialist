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
  ContainsNoDigits = "ContainsNoDigits",
  ContainsNoUppercaseLetters = "ContainsNoUppercaseLetters",
}

export function validatePassword(password: string): ValidationResult {
  if (password.length < 5 || password.length > 15) {
    return {
      valid: false,
      errors: [PasswordValidationErrors.InvalidPasswordLength],
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      valid: false,
      errors: [PasswordValidationErrors.ContainsNoDigits],
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      errors: [PasswordValidationErrors.ContainsNoUppercaseLetters],
    };
  }

  return {
    valid: true,
  };
}
