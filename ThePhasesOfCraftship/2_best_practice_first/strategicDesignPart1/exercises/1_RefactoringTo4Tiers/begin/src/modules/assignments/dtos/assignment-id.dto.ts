import { InvalidIdException } from "../../../shared/exceptions";
import { isUUID, validateIncommingObject } from "../../../shared/misc";

export class AssignmentIdDTO {
  constructor(public readonly id: string) {}

  static fromRequest(params: Record<string, string>) {
    const requiredKeys = ["assignmentId"];
    validateIncommingObject(params, requiredKeys);
    const { assignmentId } = params;
    if (!isUUID(assignmentId)) {
      throw new InvalidIdException(assignmentId);
    }
    return new AssignmentIdDTO(assignmentId);
  }
}
