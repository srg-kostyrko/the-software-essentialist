import { InvalidRequestBodyException } from "./exceptions";

export function isUUID(id: string) {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
    id
  );
}

export function isMissingKeys(
  data: Record<string, unknown>,
  keysToCheckFor: string[]
) {
  for (let key of keysToCheckFor) {
    if (data[key] === undefined) return true;
  }
  return false;
}

export function validateIncommingObject(
  input: Record<string, unknown>,
  requiredKeys: string[]
) {
  if (
    !input ||
    typeof input !== "object" ||
    isMissingKeys(input, requiredKeys)
  ) {
    throw new InvalidRequestBodyException(requiredKeys);
  }
}
