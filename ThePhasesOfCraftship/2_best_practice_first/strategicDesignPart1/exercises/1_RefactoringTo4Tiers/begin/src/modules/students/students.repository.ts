import { PrismaClient } from "@prisma/client";

export class StudentsRepository {
  constructor(private db: PrismaClient["student"]) {}

  async getAll() {
    return await this.db.findMany({
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
    return await this.db.findUnique({
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
    return await this.db.create({
      data: {
        name,
      },
    });
  }
}
