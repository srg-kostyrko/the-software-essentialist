import { Class } from "@prisma/client";

export class ClassDTO {
  constructor(public readonly id: string, public readonly name: string) {}

  static fromModel(cls: Class) {
    return new ClassDTO(cls.id, cls.name);
  }
}
