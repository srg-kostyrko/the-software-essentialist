import { PrismaClient } from "@prisma/client";

export class AssignmentsRepository {
  constructor(private db: PrismaClient["assignment"]) {}

  async getClassAssignments(classId: string) {
    return await this.db.findMany({
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
