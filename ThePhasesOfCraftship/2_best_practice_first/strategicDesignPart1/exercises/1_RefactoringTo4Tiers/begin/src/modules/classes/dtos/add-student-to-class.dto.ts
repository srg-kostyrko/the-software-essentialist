import {
  InvalidIdException,
  InvalidRequestBodyException,
} from "../../../shared/exceptions";
import { isMissingKeys, isUUID } from "../../../shared/misc";
import { StudentIdDTO } from "../../students/dtos/student-id.dto";

export class AddStudentToClassDTO {
  constructor(public readonly studentId: StudentIdDTO) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["studentId"];

    if (
      !body ||
      typeof body !== "object" ||
      isMissingKeys(body, requiredKeys)
    ) {
      throw new InvalidRequestBodyException(requiredKeys);
    }
    return new AddStudentToClassDTO(StudentIdDTO.fromRequest(body));
  }
}
