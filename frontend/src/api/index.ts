import { useFetch } from "@/utils"
import type { Trip } from "@/types"
import type { Ref } from "vue"
export const getTrips = (skip: Ref<number>, take: Ref<number>) => {
  return useFetch<Trip[]>({
    url: `/api/trips?skip=${skip.value}&take=${take.value}`,
  })
}
