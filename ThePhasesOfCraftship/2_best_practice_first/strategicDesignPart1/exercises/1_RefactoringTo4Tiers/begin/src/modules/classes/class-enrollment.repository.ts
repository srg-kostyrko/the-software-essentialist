import { PrismaClient } from "@prisma/client";

export class ClassEnrollmentRepository {
  constructor(private db: PrismaClient["classEnrollment"]) {}

  async getClassEnrollments(classId: string, studentId: string) {
    return await this.db.findFirst({
      where: {
        studentId,
        classId,
      },
    });
  }

  async create(classId: string, studentId: string) {
    return await this.db.create({
      data: {
        classId,
        studentId,
      },
    });
  }
}
