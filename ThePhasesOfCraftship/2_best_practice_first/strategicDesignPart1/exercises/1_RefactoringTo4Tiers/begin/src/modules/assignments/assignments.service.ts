import { AssignmentNotFoundException, StudentNotFoundException } from "../../shared/exceptions";
import { StudentAssignmentDto } from "../students/dtos/student-assignment.dto";
import { StudentIdDTO } from "../students/dtos/student-id.dto";
import { StudentsRepository } from "../students/students.repository";
import { AssignmentsRepository } from "./assignments.repository";
import { AssignmentDto } from "./dtos/assignemnt.dto";
import { AssignmentIdDTO } from "./dtos/assignment-id.dto";
import { GradeAssignmentDto } from "./dtos/grade-assignment.dto";

export class AssignemntsService {
  constructor(private repository: AssignmentsRepository, private students: StudentsRepository) {}

  async getAssignemnt(dto: AssignmentIdDTO) {
    const assignment = await this.repository.getOne(dto.id);
    if (!assignment) throw new AssignmentNotFoundException(dto.id);
    return AssignmentDto.fromModel(assignment);
  }

  async getStudetAssignment(dto: AssignmentIdDTO) {
    const assignment = await this.repository.getStudetAssignment(dto.id);
    if (!assignment) throw new AssignmentNotFoundException(dto.id);
    return StudentAssignmentDto.fromModel(assignment);
  }

  async gradeAssignment(assignment: StudentAssignmentDto, dto: GradeAssignmentDto) {
    const updated = await this.repository.gradeAssignment(
      assignment.id,
      dto.grade
    );
    return StudentAssignmentDto.fromModel(updated);
  }

  async submitAssignment(assignment: StudentAssignmentDto) {
    const updated = await this.repository.submitAssignment(assignment.id);
    return StudentAssignmentDto.fromModel(updated);
  }

  async assignStudent(assignmentId: AssignmentIdDTO, studentId: StudentIdDTO) {
    const assignment = await this.repository.getOne(assignmentId.id);
    if (!assignment) throw new AssignmentNotFoundException(assignmentId.id);
    const student = await this.students.getOne(studentId.id);
    if (!student) throw new StudentNotFoundException(studentId.id);
    const updated = await this.repository.assignStudent(assignment.id, student.id);
    return StudentAssignmentDto.fromModel(updated);
  }
}
