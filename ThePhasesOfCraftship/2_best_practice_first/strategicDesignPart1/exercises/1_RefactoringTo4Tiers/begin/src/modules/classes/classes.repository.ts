import { PrismaClient } from "@prisma/client";

export class ClassesRepository {
  constructor(private db: PrismaClient["class"]) {}

  async create(name: string) {
    return await this.db.create({
      data: {
        name,
      },
    });
  }

  async getOne(id: string) {
    return await this.db.findUnique({
      where: {
        id,
      },
    });
  }
}
