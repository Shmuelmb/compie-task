import { Request, Response } from "express"
import { responseWithError, responseWithSuccess } from "@/status/status"
import * as services from "@/services/"

export const getTrips = async (req: Request, res: Response) => {
  try {
    const skip = Number(req.query.skip) || 0
    const take = Number(req.query.take) || 10
    const users = await services.getTrips(skip, take)
    return responseWithSuccess(res, users)
  } catch (err) {
    return responseWithError(res, err)
  }
}

export const searchTrips = async (req: Request, res: Response) => {
  try {
    const query = req.query.query as string
    const users = await services.searchTrips(query)
    return responseWithSuccess(res, users)
  } catch (err) {
    return responseWithError(res, err)
  }
}
