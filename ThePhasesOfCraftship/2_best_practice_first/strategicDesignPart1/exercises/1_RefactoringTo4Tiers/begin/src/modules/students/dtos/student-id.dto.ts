import { InvalidIdException } from "../../../shared/exceptions";
import { isUUID, validateIncommingObject } from "../../../shared/misc";

export class StudentIdDTO {
  constructor(public readonly id: string) {}

  static fromRequest(params: Record<string, string>) {
    const requiredKeys = ["studentId"];
    validateIncommingObject(params, requiredKeys);
    const { studentId } = params;
    if (!isUUID(studentId)) {
      throw new InvalidIdException(studentId);
    }
    return new StudentIdDTO(studentId);
  }
}
