import {
  ClassNotFoundException,
  DuplicatedClassEnrollmentException,
} from "../../shared/exceptions";
import { AssignmentsRepository } from "../assignments/assignments.repository";
import { StudentDto } from "../students/dtos/student.dto";
import { ClassEnrollmentRepository } from "./class-enrollment.repository";
import { ClassesRepository } from "./classes.repository";
import { ClassEnrollmentDTO } from "./dtos/class-enrollment.dto";
import { ClassIdDTO } from "./dtos/class-id.dto";
import { ClassDTO } from "./dtos/class.dto";
import { CreateClassDTO } from "./dtos/create-class.dto";

export class ClassesService {
  constructor(
    private repository: ClassesRepository,
    private enrollemntRepository: ClassEnrollmentRepository,
    private assignmentsRepository: AssignmentsRepository
  ) {}

  async getClass(dto: ClassIdDTO) {
    const klass = await this.repository.getOne(dto.id);
    if (!klass) throw new ClassNotFoundException(dto.id);
    return ClassDTO.fromModel(klass);
  }

  async createClass(dto: CreateClassDTO) {
    const klass = await this.repository.create(dto.name);

    return ClassDTO.fromModel(klass);
  }

  async addStudentToClass(klass: ClassDTO, student: StudentDto) {
    const duplicatedClassEnrollment =
      await this.enrollemntRepository.getClassEnrollments(klass.id, student.id);

    if (duplicatedClassEnrollment) {
      throw new DuplicatedClassEnrollmentException(klass.id, student.id);
    }

    const classEnrollment = await this.enrollemntRepository.create(
      klass.id,
      student.id
    );

    return ClassEnrollmentDTO.fromModel(classEnrollment);
  }

  async getClassAssignments(klass: ClassDTO) {
    const assignments = this.assignmentsRepository.getClassAssignments(
      klass.id
    );

    return assignments; // TODO
  }
}
