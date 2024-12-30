import { PrismaClient } from "@prisma/client";

export class ClassesRepository {
  constructor(private db: PrismaClient) {}

  async create(name: string) {
    return await this.db.class.create({
      data: {
        name,
      },
    });
  }

  async getOne(id: string) {
    return await this.db.class.findUnique({
      where: {
        id,
      },
    });
  }

  async getEnrollments(classId: string, studentId: string) {
    return await this.db.classEnrollment.findFirst({
      where: {
        studentId,
        classId,
      },
    });
  }

  async createEnrollment(classId: string, studentId: string) {
    return await this.db.classEnrollment.create({
      data: {
        classId,
        studentId,
      },
    });
  }

  async getAssignments(classId: string) {
    return await this.db.assignment.findMany({
      where: {
        classId,
      },
      include: {
        class: true,
        studentTasks: true,
      },
    });
  }
}
