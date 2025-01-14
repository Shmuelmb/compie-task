import { rateLimit } from "express-rate-limit"
import { error, responseWithError } from "@/status/status"
import { TOO_MANY } from "@/status/codes"

const fifteenMinutes = 15 * 60 * 1000

export const limiter = rateLimit({
  windowMs: fifteenMinutes,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: true,
  handler: (req, res) => {
    responseWithError(
      res,
      error("Too many requests, please try again later", TOO_MANY)
    )
  },
})

export default limiter
