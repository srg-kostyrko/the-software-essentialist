import { PrismaClient } from "@prisma/client";

export class AssignmentsRepository {
  constructor(private db: PrismaClient) {}

  async getOne(id: string) {
    return await this.db.assignment.findUnique({
      where: {
        id,
      },
      include: {
        class: true,
        studentTasks: true,
      },
    });
  }

  getStudetAssignment(id: string) {
    return this.db.studentAssignment.findUnique({
      where: {
        id,
      },
    });
  }

  async gradeAssignment(id: string, grade: string) {
    return await this.db.studentAssignment.update({
      where: {
        id,
      },
      data: {
        grade,
      },
    });
  }

  async submitAssignment(id: string) {
    return await this.db.studentAssignment.update({
      where: {
        id,
      },
      data: {
        status: "submitted",
      },
    });
  }

  async assignStudent(assignmentId: string, studentId: string) {
    return await this.db.studentAssignment.create({
      data: {
        studentId,
        assignmentId,
      },
    });
  }
}
