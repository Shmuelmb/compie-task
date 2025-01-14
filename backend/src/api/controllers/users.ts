import { Request, Response } from "express"
import { responseWithError, responseWithSuccess } from "@/status/status"
import * as services from "@/services/"

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await services.getUsers()
    return responseWithSuccess(res, users)
  } catch (err) {
    return responseWithError(res, err)
  }
}
