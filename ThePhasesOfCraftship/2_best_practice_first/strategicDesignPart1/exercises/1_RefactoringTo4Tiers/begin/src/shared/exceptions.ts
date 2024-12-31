import { ErrorExceptionType } from "./constants";

export class AppException extends Error {
  constructor(
    public readonly type: ErrorExceptionType,
    public readonly statusCode: number,
    message: string
  ) {
    super(message);
  }
}

export class InvalidRequestParamsException extends AppException {
  constructor(missingKeys: string[]) {
    super(
      ErrorExceptionType.ValidationError,
      400,
      "Request params are missing the following keys: " + missingKeys.join(", ")
    );
  }
}

export class InvalidRequestBodyException extends AppException {
  constructor(missingKeys: string[]) {
    super(
      ErrorExceptionType.ValidationError,
      400,
      "Request body is missing the following keys: " + missingKeys.join(", ")
    );
  }
}

export class InvalidIdException extends AppException {
  constructor(id: string) {
    super(ErrorExceptionType.ValidationError, 400, "Invalid id: " + id);
  }
}

export class StudentNotFoundException extends AppException {
  constructor(id: string) {
    super(ErrorExceptionType.StudentNotFound, 404, "Student not found: " + id);
  }
}

export class ClassNotFoundException extends AppException {
  constructor(id: string) {
    super(ErrorExceptionType.ClassNotFound, 404, "Class not found: " + id);
  }
}

export class AssignmentNotFoundException extends AppException {
  constructor(id: string) {
    super(
      ErrorExceptionType.AssignmentNotFound,
      404,
      "Assignment not found: " + id
    );
  }
}

export class DuplicatedClassEnrollmentException extends AppException {
  constructor(classId: string, studentId: string) {
    super(
      ErrorExceptionType.StudentAlreadyEnrolled,
      409,
      "Class " + classId + " already has student " + studentId
    );
  }
}
