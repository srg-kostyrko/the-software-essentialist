import { Assignment, Class, StudentAssignment } from "@prisma/client";
import { ClassDTO } from "../../classes/dtos/class.dto";
import { StudentAssignmentDTO } from "./student-assignment.dto";

export class AssignmentDTO {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly classId: string,
    public readonly klass?: ClassDTO,
    public readonly studentTasks?: StudentAssignmentDTO[]
  ) {}

  static fromModel(
    model: Assignment & {
      class?: Class;
      studentTasks?: StudentAssignment[];
    }
  ) {
    return new AssignmentDTO(
      model.id,
      model.title,
      model.classId,
      model.class ? ClassDTO.fromModel(model.class) : undefined,
      model.studentTasks
        ? model.studentTasks.map(StudentAssignmentDTO.fromModel)
        : undefined
    );
  }
}
