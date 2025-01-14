export type BaseServiceResponse = {
  success?: boolean
  code?: number
  message?: string
}

export type ErrorResponse = {
  success?: boolean
  code: number
  message: string
  data?: null | never
}

export interface ServiceResponse<T> extends BaseServiceResponse {
  data?: T
}
