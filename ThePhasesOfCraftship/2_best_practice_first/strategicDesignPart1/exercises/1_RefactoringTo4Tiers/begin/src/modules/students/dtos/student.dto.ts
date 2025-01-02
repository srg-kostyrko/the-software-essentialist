import {
  ClassEnrollment,
  ReportCard,
  Student,
  StudentAssignment,
} from "@prisma/client";
import { StudentAssignmentDTO } from "../../assignments/dtos/student-assignment.dto";
import { ReportCardDTO } from "./report-card.dto";
import { ClassEnrollmentDTO } from "./class-enrollment.dto";

export class StudentDTO {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly classes?: ClassEnrollmentDTO[],
    public readonly assignments?: StudentAssignmentDTO[],
    public readonly reportCards?: ReportCardDTO[]
  ) {}

  static fromModel(
    student: Student & {
      classes?: ClassEnrollment[];
      assignments?: StudentAssignment[];
      reportCards?: ReportCard[];
    }
  ) {
    return new StudentDTO(
      student.id,
      student.name,
      student.classes
        ? student.classes.map(ClassEnrollmentDTO.fromModel)
        : undefined,
      student.assignments
        ? student.assignments.map(StudentAssignmentDTO.fromModel)
        : undefined,
      student.reportCards
        ? student.reportCards.map(ReportCardDTO.fromModel)
        : undefined
    );
  }
}
