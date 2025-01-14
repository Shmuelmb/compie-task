import { Request, Response } from "express"
import { responseWithError } from "@/status/status"
import * as services from "@/services/"

export const getHealthCheck = async (req: Request, res: Response) => {
  try {
    return services.getHealth()
  } catch (err) {
    return responseWithError(res, err)
  }
}
