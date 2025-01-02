import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../shared/response";
import { ErrorExceptionType } from "../shared/constants";
import { AppException } from "../shared/exceptions";

export type ErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => Response;

export const errorHandler: ErrorHandler = (error, req, res, next) => {
  if (error instanceof AppException) {
    return errorResponse(res, error.type, error.message, error.statusCode);
  }

  return errorResponse(res, ErrorExceptionType.ServerError, error.message, 500);
};
