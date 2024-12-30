import { StudentNotFoundException } from "../../shared/exceptions";
import { CreateStudentDTO } from "./dtos/create-student.dto";
import { StudentAssignmentDto } from "./dtos/student-assignment.dto";
import { StudentIdDTO } from "./dtos/student-id.dto";
import { StudentDto } from "./dtos/student.dto";
import { StudentAssignmentsRepository } from "./student-assignments.repository";
import { StudentsRepository } from "./students.repository";

export class StudentsService {
  constructor(
    private repository: StudentsRepository,
    private assignementsRepository: StudentAssignmentsRepository
  ) {}

  async listStudents() {
    const students = await this.repository.getAll();
    return students.map((student) => StudentDto.fromModel(student));
  }

  async getStudent(dto: StudentIdDTO) {
    const student = await this.repository.getOne(dto.id);
    if (!student)
      throw new StudentNotFoundException(`Student with id ${dto.id} not found`);
    return StudentDto.fromModel(student);
  }

  async createStudent(student: CreateStudentDTO) {
    const stutent = await this.repository.create(student.name);
    return StudentDto.fromModel(stutent);
  }

  async getAssignments(student: StudentDto) {
    const studentAssignments =
      await this.assignementsRepository.getStudentAssignments(student.id);
    return studentAssignments.map((assignment) =>
      StudentAssignmentDto.fromModel(assignment)
    );
  }

  async getGrades(student: StudentDto) {
    const studentAssignments =
      await this.assignementsRepository.getStudentGrades(student.id);
    return studentAssignments.map((assignment) =>
      StudentAssignmentDto.fromModel(assignment)
    );
  }
}
