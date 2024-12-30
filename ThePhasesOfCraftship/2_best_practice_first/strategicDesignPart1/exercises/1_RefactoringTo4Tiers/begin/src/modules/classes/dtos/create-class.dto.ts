import { InvalidRequestBodyException } from "../../../shared/exceptions";
import { isMissingKeys } from "../../../shared/misc";

export class CreateClassDTO {
  constructor(public readonly name: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["name"];

    if (
      !body ||
      typeof body !== "object" ||
      isMissingKeys(body, requiredKeys)
    ) {
      throw new InvalidRequestBodyException(requiredKeys);
    }

    return new CreateClassDTO(body.name);
  }
}
