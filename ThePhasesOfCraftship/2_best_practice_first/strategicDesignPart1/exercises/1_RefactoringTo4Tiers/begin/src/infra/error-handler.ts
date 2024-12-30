import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../shared/response";
import { ErrorExceptionType } from "../shared/constants";
import {
  DuplicatedClassEnrollmentException,
  InvalidIdException,
  InvalidRequestBodyException,
  InvalidRequestParamsException,
  StudentNotFoundException,
} from "../shared/exceptions";

export type ErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => Response;

export const errorHandler: ErrorHandler = (error, req, res, next) => {
  let code = 500;
  let errorType = ErrorExceptionType.ServerError;

  if (
    error instanceof InvalidRequestParamsException ||
    error instanceof InvalidRequestBodyException ||
    error instanceof InvalidIdException
  ) {
    code = 400;
    errorType = ErrorExceptionType.ValidationError;
  } else if (error instanceof StudentNotFoundException) {
    code = 404;
    errorType = ErrorExceptionType.StudentNotFound;
  } else if (error instanceof DuplicatedClassEnrollmentException) {
    code = 409;
    errorType = ErrorExceptionType.StudentAlreadyEnrolled;
  }

  return errorResponse(res, errorType, error.message, code);
};
