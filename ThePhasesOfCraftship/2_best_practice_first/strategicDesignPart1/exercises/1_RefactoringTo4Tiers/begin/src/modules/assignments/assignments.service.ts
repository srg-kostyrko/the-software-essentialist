import { AssignmentNotFoundException, StudentNotFoundException } from "../../shared/exceptions";
import { StudentAssignmentDTO } from "./dtos/student-assignment.dto";
import { StudentIdDTO } from "../students/dtos/student-id.dto";
import { StudentsRepository } from "../students/students.repository";
import { AssignmentsRepository } from "./assignments.repository";
import { AssignmentDTO } from "./dtos/assignemnt.dto";
import { AssignmentIdDTO } from "./dtos/assignment-id.dto";
import { GradeAssignmentDTO } from "./dtos/grade-assignment.dto";

export class AssignemntsService {
  constructor(private repository: AssignmentsRepository, private students: StudentsRepository) {}

  async getAssignemnt(dto: AssignmentIdDTO) {
    const assignment = await this.repository.getOne(dto.id);
    if (!assignment) throw new AssignmentNotFoundException(dto.id);
    return AssignmentDTO.fromModel(assignment);
  }

  async getStudetAssignment(dto: AssignmentIdDTO) {
    const assignment = await this.repository.getStudetAssignment(dto.id);
    if (!assignment) throw new AssignmentNotFoundException(dto.id);
    return StudentAssignmentDTO.fromModel(assignment);
  }

  async gradeAssignment(assignment: StudentAssignmentDTO, dto: GradeAssignmentDTO) {
    const updated = await this.repository.gradeAssignment(
      assignment.id,
      dto.grade
    );
    return StudentAssignmentDTO.fromModel(updated);
  }

  async submitAssignment(assignment: StudentAssignmentDTO) {
    const updated = await this.repository.submitAssignment(assignment.id);
    return StudentAssignmentDTO.fromModel(updated);
  }

  async assignStudent(assignmentId: AssignmentIdDTO, studentId: StudentIdDTO) {
    const assignment = await this.repository.getOne(assignmentId.id);
    if (!assignment) throw new AssignmentNotFoundException(assignmentId.id);
    const student = await this.students.getOne(studentId.id);
    if (!student) throw new StudentNotFoundException(studentId.id);
    const updated = await this.repository.assignStudent(assignment.id, student.id);
    return StudentAssignmentDTO.fromModel(updated);
  }
}
