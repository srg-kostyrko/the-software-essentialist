import { ReportCard } from "@prisma/client";

export class ReportCardDTO {
  constructor(public readonly id: string, public readonly studentId: string) {}
  static fromModel(reportCard: ReportCard) {
    return new ReportCardDTO(reportCard.id, reportCard.studentId);
  }
}
