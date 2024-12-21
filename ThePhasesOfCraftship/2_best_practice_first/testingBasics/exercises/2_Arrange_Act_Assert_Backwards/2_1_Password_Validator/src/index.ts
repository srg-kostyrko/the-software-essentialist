export type ValidationResult =
  | {
      valid: true;
    }
  | {
      valid: false;
      errors: Array<PasswordValidationErrors>;
    };

export enum PasswordValidationErrors {
  InvalidPasswordLength = "InvalidPasswordLength",
  ContainsNoDigits = "ContainsNoDigits",
  ContainsNoUppercaseLetters = "ContainsNoUppercaseLetters",
}

export function validatePassword(password: string): ValidationResult {
  const errors: Array<PasswordValidationErrors> = [];
  if (password.length < 5 || password.length > 15) {
    errors.push(PasswordValidationErrors.InvalidPasswordLength);
  }

  if (!/[0-9]/.test(password)) {
    errors.push(PasswordValidationErrors.ContainsNoDigits);
  }

  if (!/[A-Z]/.test(password)) {
    errors.push(PasswordValidationErrors.ContainsNoUppercaseLetters);
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors,
    };
  }

  return {
    valid: true,
  };
}
