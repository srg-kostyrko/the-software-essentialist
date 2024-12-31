import { InvalidRequestBodyException } from "../../../shared/exceptions";
import { isMissingKeys } from "../../../shared/misc";

export class GradeAssignmentDto {
  constructor(public readonly grade: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["grade"];
    if (
      !body ||
      typeof body !== "object" ||
      isMissingKeys(body, requiredKeys)
    ) {
      throw new InvalidRequestBodyException(requiredKeys);
    }
    const { grade } = body;
    if (!["A", "B", "C", "D"].includes(grade)) {
      throw new InvalidRequestBodyException(requiredKeys);
    }
    return new GradeAssignmentDto(body.grade);
  }
}
