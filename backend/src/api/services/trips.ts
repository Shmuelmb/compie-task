import { error, success } from "@/status/status"
import { BAD_GATEWAY_MSG, BAD_REQUEST } from "@/status/codes"
import { prisma } from "#db"

export const getTrips = async (skip: number, take: number) => {
  try {
    const trips = await prisma.trip.findMany({
      skip,
      take,
    })
    return success(trips)
  } catch (err) {
    throw error(err.message || BAD_GATEWAY_MSG, err.code || BAD_REQUEST)
  }
}

export const searchTrips = async (query: string) => {
  try {
    const trip = await prisma.trip.findMany({
      where: {
        OR: [
          {
            trip_offering_description: {
              contains: query,
            },
          },
          {
            from_date: {
              contains: query,
            },
          },
          {
            to_date: {
              contains: query,
            },
          },
          {
            city_name: {
              contains: query,
            },
          },
          {
            country_ISO_code: {
              hasSome: [query],
            },
          },
          {
            trip_offering_name: {
              contains: query,
            },
          },
          {
            from_age: {
              contains: query,
            },
          },
          {
            to_age: {
              contains: query,
            },
          },
        ],
      },
    })
    return success(trip)
  } catch (err) {
    throw error(err.message || BAD_GATEWAY_MSG, err.code || BAD_REQUEST)
  }
}
