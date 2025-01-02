import { StudentAssignment } from "@prisma/client";

export class StudentAssignmentDTO {
  constructor(
    public readonly id: string,
    public readonly studentId: string,
    public readonly assignmentId: string,
    public readonly status: string
  ) {}

  static fromModel(studentAssignment: StudentAssignment) {
    return new StudentAssignmentDTO(
      studentAssignment.id,
      studentAssignment.studentId,
      studentAssignment.assignmentId,
      studentAssignment.status
    );
  }
}
