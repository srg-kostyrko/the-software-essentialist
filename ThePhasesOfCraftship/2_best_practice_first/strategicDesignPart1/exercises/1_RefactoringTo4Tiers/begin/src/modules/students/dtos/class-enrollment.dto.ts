import { ClassEnrollment } from "@prisma/client";

export class ClassEnrollmentDTO {
  constructor(
    public readonly classId: string,
    public readonly studentId: string
  ) {}

  static fromModel(enrollment: ClassEnrollment) {
    return new ClassEnrollmentDTO(enrollment.classId, enrollment.studentId);
  }
}
