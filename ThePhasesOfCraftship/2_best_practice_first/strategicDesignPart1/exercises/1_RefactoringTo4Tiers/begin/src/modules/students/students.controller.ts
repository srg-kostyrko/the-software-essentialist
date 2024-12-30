import express from "express";
import { AppController } from "../../infra/app.controller";
import { StudentsService } from "./students.service";
import { successResponse } from "../../shared/response";
import { ErrorHandler } from "../../infra/error-handler";
import { StudentIdDTO } from "./dtos/student-id.dto";
import { CreateStudentDTO } from "./dtos/create-student.dto";
import { StudentAssignmentsRepository } from "./student-assignments.repository";

export class StudentsController extends AppController {
  constructor(private service: StudentsService, errorHandler: ErrorHandler) {
    super(errorHandler);
  }

  setupRoutes(): void {
    this.router.get("/", this.createRouteHandler(this.listStudents));
    this.router.post("/", this.createRouteHandler(this.createStudent));
    this.router.get("/:studentId", this.createRouteHandler(this.getStudent));
    this.router.get(
      "/:studentId/assignments",
      this.createRouteHandler(this.getAssignments)
    );
    this.router.get("/:studentId/grades", this.createRouteHandler(this.getGrades));
  }

  listStudents = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const students = await this.service.listStudents();
    successResponse(res, students);
  };

  getStudent = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const studentId = StudentIdDTO.fromRequest(req.params);
    const student = await this.service.getStudent(studentId);
    successResponse(res, student);
  };

  createStudent = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const dto = CreateStudentDTO.fromRequest(req.body);
    const student = await this.service.createStudent(dto);
    successResponse(res, student, 201);
  };

  getAssignments = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const studentId = StudentIdDTO.fromRequest(req.params);
    const student = await this.service.getStudent(studentId);
    const assignments = await this.service.getAssignments(student);
    successResponse(res, assignments);
  };

  getGrades = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const studentId = StudentIdDTO.fromRequest(req.params);
    const student = await this.service.getStudent(studentId);
    const grades = await this.service.getGrades(student);
    successResponse(res, grades);
  };
}
