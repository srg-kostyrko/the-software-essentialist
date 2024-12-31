import express from "express";
import { AppController } from "../../infra/app.controller";
import { ErrorHandler } from "../../infra/error-handler";
import { AssignemntsService } from "./assignments.service";
import { AssignmentIdDTO } from "./dtos/assignment-id.dto";
import { successResponse } from "../../shared/response";
import { GradeAssignmentDto } from "./dtos/grade-assignment.dto";
import { StudentIdDTO } from "../students/dtos/student-id.dto";

export class AssignmentsController extends AppController {
  constructor(private service: AssignemntsService, errorHandler: ErrorHandler) {
    super(errorHandler);
  }
  setupRoutes(): void {
    this.router.get(
      "/:assignmentId",
      this.createRouteHandler(this.getAssignemntById)
    );
    this.router.post(
      "/:assignmentId/students",
      this.createRouteHandler(this.assignStudent)
    )
    this.router.post(
      "/:assignmentId/grade",
      this.createRouteHandler(this.gradeAssignment)
    );
    this.router.post(
      "/:assignmentId/submit",
      this.createRouteHandler(this.submitAssignment)
    );
  }

  getAssignemntById = async (req: express.Request, res: express.Response) => {
    const assignemntId = AssignmentIdDTO.fromRequest(req.params);
    const assignemnt = await this.service.getAssignemnt(assignemntId);
    successResponse(res, assignemnt);
  };

  gradeAssignment = async (req: express.Request, res: express.Response) => {
    const assignemntId = AssignmentIdDTO.fromRequest(req.params);
    const dto = GradeAssignmentDto.fromRequest(req.body);
    const assignemnt = await this.service.getStudetAssignment(assignemntId);
    const updated = await this.service.gradeAssignment(assignemnt, dto);
    successResponse(res, updated);
  };

  submitAssignment = async (req: express.Request, res: express.Response) => {
    const assignemntId = AssignmentIdDTO.fromRequest(req.params);
    const assignemnt = await this.service.getStudetAssignment(assignemntId);
    const updated = await this.service.submitAssignment(assignemnt);
    successResponse(res, updated);
  };

  assignStudent = async (req: express.Request, res: express.Response) => {
    const assignemntId = AssignmentIdDTO.fromRequest(req.params);
    const studentId = StudentIdDTO.fromRequest(req.body);
    const updated = await this.service.assignStudent(assignemntId, studentId);
    successResponse(res, updated);
  };
}
