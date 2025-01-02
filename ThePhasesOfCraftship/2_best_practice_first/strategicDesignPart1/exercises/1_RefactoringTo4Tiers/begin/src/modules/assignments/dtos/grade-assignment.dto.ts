import { InvalidRequestBodyException } from "../../../shared/exceptions";
import { isMissingKeys, validateIncommingObject } from "../../../shared/misc";

export class GradeAssignmentDTO {
  constructor(public readonly grade: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["grade"];
    validateIncommingObject(body, requiredKeys);
    const { grade } = body;
    if (!["A", "B", "C", "D"].includes(grade)) {
      throw new InvalidRequestBodyException(requiredKeys);
    }
    return new GradeAssignmentDTO(body.grade);
  }
}
