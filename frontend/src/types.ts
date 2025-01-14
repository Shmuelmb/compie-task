export type BaseServiceResponse<T> = {
  success?: boolean
  code?: number
  message?: string
  data?: T
}

export type ErrorResponse = {
  success?: boolean
  code: number
  message: string
  data?: null | never
}

export type Trip = {
  id: string
  trip_offering_description: string
  from_date: string
  to_date: string
  city_name: string
  country_ISO_code: string[]
  trip_offering_name: string
  from_age: string
  to_age: string
  image: string
}
