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

describe('password validator', () => {

  test('hello', () => {
    expect("between 5 and 15").toContain('5 and 15')
  })
})


