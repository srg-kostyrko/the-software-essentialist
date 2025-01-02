import { PrismaClient } from "@prisma/client";

export class StudentsRepository {
  constructor(private db: PrismaClient) {}

  async getAll() {
    return await this.db.student.findMany({
      include: {
        classes: true,
        assignments: true,
        reportCards: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async getOne(id: string) {
    return await this.db.student.findUnique({
      where: {
        id,
      },
      include: {
        classes: true,
        assignments: true,
        reportCards: true,
      },
    });
  }

  async create(name: string) {
    return await this.db.student.create({
      data: {
        name,
      },
    });
  }

  async getAssignments(studentId: string) {
    return await this.db.studentAssignment.findMany({
      where: {
        studentId,
        status: "submitted",
      },
      include: {
        assignment: true,
      },
    });
  }

  async getGrades(studentId: string) {
    return await this.db.studentAssignment.findMany({
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
