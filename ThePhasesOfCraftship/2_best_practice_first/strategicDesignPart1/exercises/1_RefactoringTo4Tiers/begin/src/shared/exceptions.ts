export class InvalidRequestParamsException extends Error {
  constructor(missingKeys: string[]) {
    super(
      "Request params are missing the following keys: " + missingKeys.join(", ")
    );
  }
}

export class InvalidRequestBodyException extends Error {
  constructor(missingKeys: string[]) {
    super(
      "Request body is missing the following keys: " + missingKeys.join(", ")
    );
  }
}

export class InvalidIdException extends Error {
  constructor(id: string) {
    super("Invalid id: " + id);
  }
}

export class StudentNotFoundException extends Error {
  constructor(id: string) {
    super("Student not found: " + id);
  }
}
