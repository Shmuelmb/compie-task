import { Request, Response } from "express"
import { responseWithError, responseWithSuccess } from "@/status/status"
import * as services from "@/services/"

export const getHealthCheck = async (req: Request, res: Response) => {
  try {
    return responseWithSuccess(res, await services.getHealth())
  } catch (err) {
    return responseWithError(res, err)
  }
}
