import { InvalidRequestBodyException } from "../../../shared/exceptions";
import { isMissingKeys, validateIncommingObject } from "../../../shared/misc";

export class CreateStudentDTO {
  constructor(public readonly name: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ['name'];
    validateIncommingObject(body, requiredKeys);

    return new CreateStudentDTO(body.name);
  }
}
