import { error, success } from "@/status/status"
import { BAD_GATEWAY_MSG, BAD_REQUEST } from "@/status/codes"

export const getHealth = async () => {
  try {
    return success({ status: "ok" })
  } catch (err) {
    throw error(err.message || BAD_GATEWAY_MSG, err.code || BAD_REQUEST)
  }
}
