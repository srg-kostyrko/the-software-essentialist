import { InvalidRequestBodyException } from "../../../shared/exceptions";
import { isMissingKeys } from "../../../shared/misc";

export class CreateClassAssignmentDto {
  constructor(public readonly title: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["title"];

    if (
      !body ||
      typeof body !== "object" ||
      isMissingKeys(body, requiredKeys)
    ) {
      throw new InvalidRequestBodyException(requiredKeys);
    }

    return new CreateClassAssignmentDto(body.title);
  }
}
