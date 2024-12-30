import express from "express";
import { AppController } from "../../infra/app.controller";
import { ErrorHandler } from "../../infra/error-handler";
import { ClassesService } from "./classes.service";
import { successResponse } from "../../shared/response";
import { CreateClassDTO } from "./dtos/create-class.dto";
import { ClassIdDTO } from "./dtos/class-id.dto";
import { AddStudentToClassDTO } from "./dtos/add-student-to-class.dto";
import { StudentsService } from "../students/students.service";

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


// GET all assignments for class
// app.get('/classes/:id/assignments', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         if(!isUUID(id)) {
//             return res.status(400).json({ error: Errors.ValidationError, data: undefined, success: false });
//         }

//         // check if class exists
//         const cls = await prisma.class.findUnique({
//             where: {
//                 id
//             }
//         });

//         if (!cls) {
//             return res.status(404).json({ error: Errors.ClassNotFound, data: undefined, success: false });
//         }

//         const assignments = await prisma.assignment.findMany({
//             where: {
//                 classId: id
//             },
//             include: {
//                 class: true,
//                 studentTasks: true
//             }
//         });
    
//         res.status(200).json({ error: undefined, data: parseForResponse(assignments), success: true });
//     } catch (error) {
//         res.status(500).json({ error: Errors.ServerError, data: undefined, success: false });
//     }
// });

}
