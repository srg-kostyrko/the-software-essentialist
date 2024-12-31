import { Assignment, Class, StudentAssignment } from "@prisma/client";

export class AssignmentDto {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly classId: string,
    public readonly klass?: Class,
    public readonly studentTasks?: StudentAssignment[]
  ) {}

  static fromModel(
    model: Assignment & {
      class?: Class;
      studentTasks?: StudentAssignment[];
    }
  ) {
    return new AssignmentDto(
      model.id,
      model.title,
      model.classId,
      model.class,
      model.studentTasks
    );
  }
}
