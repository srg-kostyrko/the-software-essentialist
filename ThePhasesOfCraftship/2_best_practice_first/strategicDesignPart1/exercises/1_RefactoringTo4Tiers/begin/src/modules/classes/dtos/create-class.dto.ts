import { validateIncommingObject } from "../../../shared/misc";

export class CreateClassDTO {
  constructor(public readonly name: string) {}

  static fromRequest(body: Record<string, string>) {
    const requiredKeys = ["name"];
    validateIncommingObject(body, requiredKeys);

    return new CreateClassDTO(body.name);
  }
}
