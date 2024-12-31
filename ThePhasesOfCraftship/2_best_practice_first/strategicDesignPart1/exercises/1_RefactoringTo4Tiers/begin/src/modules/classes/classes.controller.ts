import express from "express";
import { AppController } from "../../infra/app.controller";
import { ErrorHandler } from "../../infra/error-handler";
import { ClassesService } from "./classes.service";
import { successResponse } from "../../shared/response";
import { CreateClassDTO } from "./dtos/create-class.dto";
import { ClassIdDTO } from "./dtos/class-id.dto";
import { AddStudentToClassDTO } from "./dtos/add-student-to-class.dto";
import { StudentsService } from "../students/students.service";
import { CreateClassAssignmentDTO } from "./dtos/create-class-assignment.dto";

export class ClassesController extends AppController {
  constructor(
    private service: ClassesService,
    private studentService: StudentsService,
    errorHandler: ErrorHandler
  ) {
    super(errorHandler);
  }
  setupRoutes(): void {
    this.router.post("/", this.createRouteHandler(this.createClass));
    this.router.post("/:id/enrollments", this.createRouteHandler(this.addStudentToClass));
    this.router.get("/:id/assignments", this.createRouteHandler(this.getClassAssignments));
    this.router.post("/:id/assignments", this.createRouteHandler(this.createClassAssignment));
  }

  createClass = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const dto = CreateClassDTO.fromRequest(req.body);
    const cls = await this.service.createClass(dto);
    successResponse(res, cls, 201);
  };

  addStudentToClass = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const classId = ClassIdDTO.fromRequestParams(req.params);
    const klass = await this.service.getClass(classId);
    const dto = AddStudentToClassDTO.fromRequest(req.body);
    const student = await this.studentService.getStudent(dto.studentId);
    const cls = await this.service.addStudentToClass(klass, student);
    successResponse(res, cls, 201);
  };

  getClassAssignments = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const classId = ClassIdDTO.fromRequestParams(req.params);
    const klass = await this.service.getClass(classId);
    const assignments = await this.service.getClassAssignments(klass);
    successResponse(res, assignments);
  };

  createClassAssignment = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const classId = ClassIdDTO.fromRequestParams(req.params);
    const klass = await this.service.getClass(classId);
    const dto = CreateClassAssignmentDTO.fromRequest(req.body);
    const assignment = await this.service.createClassAssignment(klass, dto);
    successResponse(res, assignment, 201);
  };
}
