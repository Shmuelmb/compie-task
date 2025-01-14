import { Response } from "express"

import { BAD_REQUEST, BAD_REQUEST_MSG, PRISMA_DB_ERROR } from "./codes"
import {
  BaseServiceResponse,
  ErrorResponse,
  ServiceResponse,
} from "@/types/status"

export function error(
  message = BAD_REQUEST_MSG,
  code = BAD_REQUEST,
  data: null = null
): ErrorResponse {
  return {
    success: false,
    code,
    message,
    data,
  }
}

export function success<T>(
  data: T,
  message = "",
  code = 200
): ServiceResponse<T> {
  return {
    success: true,
    code,
    ["data"]: data,
    message,
  }
}

export function responseWithError(res: Response, err: ErrorResponse) {
  res
    .status(err.code.toString().startsWith("P") ? PRISMA_DB_ERROR : err.code)
    .json(err)
}

export function responseWithSuccess<T>(
  res: Response,
  payload: BaseServiceResponse & { data?: T }
) {
  return res.status(payload.code).json(payload)
}
