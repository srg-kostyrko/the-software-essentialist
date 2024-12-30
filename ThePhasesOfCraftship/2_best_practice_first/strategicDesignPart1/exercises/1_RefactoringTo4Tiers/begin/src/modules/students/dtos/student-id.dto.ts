import {
  InvalidIdException,
  InvalidRequestParamsException,
} from "../../../shared/exceptions";
import { isUUID } from "../../../shared/misc";

export class StudentIdDTO {
  constructor(public readonly id: string) {}

  static fromRequest(params: Record<string, string>) {
    const { studentId } = params;
    if (!studentId) {
      throw new InvalidRequestParamsException(["id"]);
    }
    if (!isUUID(studentId)) {
      throw new InvalidIdException(studentId);
    }
    return new StudentIdDTO(studentId);
  }
}