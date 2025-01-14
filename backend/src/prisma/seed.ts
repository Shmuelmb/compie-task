import { prisma } from "./"

const images = [
  {
    url: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1470074558764-4e577e98bc85?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
export type Trip = {
  trip_offering_description: string
  from_date: string
  to_date: string
  city_name: string
  data_lst_countries: {
    country_ISO_code: string
  }[]
  trip_offering_name: string
  from_age: string
  to_age: string
}

export type Trips = {
  data_lst: Trip[]
}

const seed = async () => {
  try {
    const data = await fetch(
      "https://tomservices.taglit-birthrightisrael.com/Taglit_WS_Registration/Taglit/WS/GetTripOfferingByTDM?season_code=51"
    )
    const trips = (await data.json()) as Trips
    const dataRefactor = trips.data_lst.map((trip) => ({
      trip_offering_description: trip.trip_offering_description,
      from_date: trip.from_date,
      to_date: trip.to_date,
      city_name: trip.city_name,
      country_ISO_code: trip.data_lst_countries.map(
        (country) => country.country_ISO_code
      ),
      trip_offering_name: trip.trip_offering_name,
      from_age: trip.from_age,
      to_age: trip.to_age,
      image: images[Math.floor(Math.random() * images.length)].url,
    }))
    await prisma.trip.createMany({ data: dataRefactor })
    console.log(`Database has been seeded. 🌱`)
  } catch (err) {
    console.error(`Error seeding the database: ${err}`)
    process.exit(1)
  }
}

seed()
