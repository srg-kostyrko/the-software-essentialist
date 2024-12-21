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

const validators: Record<PasswordValidationErrors, (password: string) => boolean> = {
  [PasswordValidationErrors.InvalidPasswordLength]: (password) => password.length < 5 || password.length > 15,
  [PasswordValidationErrors.ContainsNoDigits]: (password) => !/[0-9]/.test(password),
  [PasswordValidationErrors.ContainsNoUppercaseLetters]: (password) => !/[A-Z]/.test(password),
}

export function validatePassword(password: string): ValidationResult {
  const errors: Array<PasswordValidationErrors> = [];
  for (const [error, validator] of Object.entries(validators)) {
    if (validator(password)) {
      errors.push(error as PasswordValidationErrors);
    }
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
