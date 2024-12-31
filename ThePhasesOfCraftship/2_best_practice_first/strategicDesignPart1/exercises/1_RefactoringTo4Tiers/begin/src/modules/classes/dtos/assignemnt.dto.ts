import { Assignment } from "@prisma/client";

export class ClassAssignmentDto {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly classId: string
  ) {}

  static fromModel(model: Assignment) {
    return new ClassAssignmentDto(model.id, model.title, model.classId);
  }
}
