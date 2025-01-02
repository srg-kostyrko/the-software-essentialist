import express from "express";
import { ErrorExceptionType } from "./constants";

export function successResponse<T>(
  res: express.Response,
  data: T,
  code = 200
): express.Response {
  return res.status(code).json({ error: undefined, data, success: true });
}

export function errorResponse(
  res: express.Response,
  error: ErrorExceptionType,
  message: string,
  code = 500
): express.Response {
  return res.status(code).json({
    error,
    data: undefined,
    success: false,
    message,
  });
}
