import { error, success } from "@/status/status"
import { BAD_GATEWAY_MSG, BAD_REQUEST } from "@/status/codes"
import { prisma } from "#db"

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany()
    return success(users)
  } catch (err) {
    console.log(err)

    throw error(err.message || BAD_GATEWAY_MSG, err.code || BAD_REQUEST)
  }
}
