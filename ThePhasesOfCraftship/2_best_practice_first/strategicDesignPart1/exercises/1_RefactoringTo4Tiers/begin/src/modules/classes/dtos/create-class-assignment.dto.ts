import { validateIncommingObject } from "../../../shared/misc";

export class CreateClassAssignmentDTO {
  constructor(public readonly title: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["title"];
    validateIncommingObject(body, requiredKeys);

    return new CreateClassAssignmentDTO(body.title);
  }
}
