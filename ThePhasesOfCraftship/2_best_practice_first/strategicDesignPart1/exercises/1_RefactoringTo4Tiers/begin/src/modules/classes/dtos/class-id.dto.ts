import {
  InvalidIdException,
} from "../../../shared/exceptions";
import { isUUID, validateIncommingObject } from "../../../shared/misc";

export class ClassIdDTO {
  constructor(public readonly id: string) {}

  static fromRequest(params: Record<string, string>) {
    const requiredKeys = ["classId"];
    validateIncommingObject(params, requiredKeys);
    const { classId } = params;
    if (!isUUID(classId)) {
      throw new InvalidIdException(classId);
    }
    return new ClassIdDTO(classId);
  }
}
