import {
  ClassEnrollment,
  ReportCard,
  Student,
  StudentAssignment,
} from "@prisma/client";

export class StudentDto {
  constructor(public readonly id: string, public readonly name: string) {}

  static fromModel(
    student: Student & {
      classes?: ClassEnrollment[];
      assignments?: StudentAssignment[];
      reportCards?: ReportCard[];
    }
  ) {
    return new StudentDto(
      student.id,
      student.name
      // classes: student.classes,
      // assignments: student.assignments,
      // reportCards: student.reportCards,
    );
  }
}
