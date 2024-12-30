import {
  InvalidIdException,
  InvalidRequestParamsException,
} from "../../../shared/exceptions";
import { isUUID } from "../../../shared/misc";

export class StudentIdDTO {
  constructor(public readonly id: string) {}

  static fromRequestParams(params: Record<string, string>) {
    const { id } = params;
    if (!id) {
      throw new InvalidRequestParamsException(["id"]);
    }
    if (!isUUID(id)) {
      throw new InvalidIdException(id);
    }
    return new StudentIdDTO(id);
  }
}
