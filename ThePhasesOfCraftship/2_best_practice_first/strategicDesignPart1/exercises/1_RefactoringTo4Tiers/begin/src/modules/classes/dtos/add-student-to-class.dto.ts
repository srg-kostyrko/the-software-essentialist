import { StudentIdDTO } from "../../students/dtos/student-id.dto";

export class AddStudentToClassDTO {
  constructor(public readonly studentId: StudentIdDTO) {}

  static fromRequest(body: Record<string, string>) {
    return new AddStudentToClassDTO(StudentIdDTO.fromRequest(body));
  }
}
