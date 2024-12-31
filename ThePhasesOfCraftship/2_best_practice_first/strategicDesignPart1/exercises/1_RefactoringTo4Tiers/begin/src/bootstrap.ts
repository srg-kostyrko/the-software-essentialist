import { prisma } from "./database";
import { errorHandler } from "./infra/error-handler";
import { Server } from "./infra/server";
import { ClassesController } from "./modules/classes/classes.controller";
import { ClassesRepository } from "./modules/classes/classes.repository";
import { ClassesService } from "./modules/classes/classes.service";
import { StudentsController } from "./modules/students/students.controller";
import { StudentsRepository } from "./modules/students/students.repository";
import { StudentsService } from "./modules/students/students.service";
import { AssignmentsRepository } from "./modules/assignments/assignments.repository";
import { AssignemntsService } from "./modules/assignments/assignments.service";
import { AssignmentsController } from "./modules/assignments/assignments.controller";

const studentsRepository = new StudentsRepository(prisma);
const studentsService = new StudentsService(studentsRepository);
const studentsController = new StudentsController(
  studentsService,
  errorHandler
);

const classesRepository = new ClassesRepository(prisma);
const classesService = new ClassesService(classesRepository);
const classesController = new ClassesController(
  classesService,
  studentsService,
  errorHandler
);

const assignmentsRepository = new AssignmentsRepository(prisma);
const assignmentsService = new AssignemntsService(
  assignmentsRepository,
  studentsRepository
);
const assignmentsController = new AssignmentsController(
  assignmentsService,
  errorHandler
);

const server = new Server({
  "/students": studentsController,
  "/classes": classesController,
  "/assignments": assignmentsController,
});

export default server;
