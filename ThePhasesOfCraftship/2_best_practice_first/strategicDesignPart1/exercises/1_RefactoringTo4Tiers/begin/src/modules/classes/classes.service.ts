import {
  ClassNotFoundException,
  DuplicatedClassEnrollmentException,
} from "../../shared/exceptions";
import { StudentDTO } from "../students/dtos/student.dto";
import { ClassesRepository } from "./classes.repository";
import { ClassAssignmentDTO } from "./dtos/assignemnt.dto";
import { ClassEnrollmentDTO } from "./dtos/class-enrollment.dto";
import { ClassIdDTO } from "./dtos/class-id.dto";
import { ClassDTO } from "./dtos/class.dto";
import { CreateClassAssignmentDTO } from "./dtos/create-class-assignment.dto";
import { CreateClassDTO } from "./dtos/create-class.dto";

export class ClassesService {
  constructor(private repository: ClassesRepository) {}

  async getClass(dto: ClassIdDTO) {
    const klass = await this.repository.getOne(dto.id);
    if (!klass) throw new ClassNotFoundException(dto.id);
    return ClassDTO.fromModel(klass);
  }

  async createClass(dto: CreateClassDTO) {
    const klass = await this.repository.create(dto.name);

    return ClassDTO.fromModel(klass);
  }

  async addStudentToClass(klass: ClassDTO, student: StudentDTO) {
    const duplicatedClassEnrollment = await this.repository.getEnrollments(
      klass.id,
      student.id
    );

    if (duplicatedClassEnrollment) {
      throw new DuplicatedClassEnrollmentException(klass.id, student.id);
    }

    const classEnrollment = await this.repository.createEnrollment(
      klass.id,
      student.id
    );

    return ClassEnrollmentDTO.fromModel(classEnrollment);
  }

  async getClassAssignments(klass: ClassDTO) {
    const assignments = await this.repository.getAssignments(klass.id);

    return assignments.map((assignment) =>
      ClassAssignmentDTO.fromModel(assignment)
    );
  }

  async createClassAssignment(klass: ClassDTO, dto: CreateClassAssignmentDTO) {
    const assignment = await this.repository.createAssignment(
      klass.id,
      dto.title
    );

    return ClassAssignmentDTO.fromModel(assignment);
  }
}
