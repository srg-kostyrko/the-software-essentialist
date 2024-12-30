import { PrismaClient } from "@prisma/client";

export class StudentAssignmentsRepository {
  constructor(private db: PrismaClient["studentAssignment"]) {}

  async getStudentAssignments(studentId: string) {
    return await this.db.findMany({
      where: {
        studentId,
        status: "submitted",
      },
      include: {
        assignment: true,
      },
    });
  }

  async getStudentGrades(studentId: string) {
    return await this.db.findMany({
      where: {
        studentId,
        status: "submitted",
        grade: {
          not: null,
        },
      },
      include: {
        assignment: true,
      },
    });
  }
}
