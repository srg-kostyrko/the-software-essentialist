import {
  InvalidIdException,
  InvalidRequestParamsException,
} from "../../../shared/exceptions";
import { isUUID } from "../../../shared/misc";

export class AssignmentIdDTO {
  constructor(public readonly id: string) {}

  static fromRequest(params: Record<string, string>) {
    const { assignmentId } = params;
    if (!assignmentId) {
      throw new InvalidRequestParamsException(["id"]);
    }
    if (!isUUID(assignmentId)) {
      throw new InvalidIdException(assignmentId);
    }
    return new AssignmentIdDTO(assignmentId);
  }
}
