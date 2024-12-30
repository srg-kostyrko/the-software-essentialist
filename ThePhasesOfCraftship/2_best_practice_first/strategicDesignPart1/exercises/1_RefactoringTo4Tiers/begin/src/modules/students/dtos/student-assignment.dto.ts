import { StudentAssignment } from "@prisma/client";

export class StudentAssignmentDto {
  constructor(
    public readonly id: string,
    public readonly studentId: string,
    public readonly assignmentId: string,
    public readonly status: string
  ) {}

  static fromModel(studentAssignment: StudentAssignment) {
    return new StudentAssignmentDto(
      studentAssignment.id,
      studentAssignment.studentId,
      studentAssignment.assignmentId,
      studentAssignment.status
    );
  }
}
