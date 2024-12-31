import { Assignment } from "@prisma/client";

export class ClassAssignmentDTO {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly classId: string
  ) {}

  static fromModel(model: Assignment) {
    return new ClassAssignmentDTO(model.id, model.title, model.classId);
  }
}
