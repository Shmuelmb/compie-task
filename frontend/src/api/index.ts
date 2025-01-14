import { useFetch } from "@/utils"
import type { User } from "@/types"

export const getUsers = () => {
  return useFetch<User[]>(`/api/users`)
}
