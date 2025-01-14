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

export type User = {}
