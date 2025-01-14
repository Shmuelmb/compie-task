import { ref } from "vue"
import type { BaseServiceResponse } from "@/types"

const baseUrl = "http://localhost:3000"
export function useFetch<T>({
  url,
  options,
  external = false,
}: {
  url: string
  options?: RequestInit
  external?: boolean
}) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const isLoading = ref(true)
  const fullUrl = external ? url : `${baseUrl}${url}`
  fetch(fullUrl, options)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      if (external) {
        data.value = (await response.json()) as T
      } else {
        const json = (await response.json()) as BaseServiceResponse<T>
        data.value = json.data
      }
    })
    .catch((err) => {
      error.value = err
    })
    .finally(() => {
      isLoading.value = false
    })

  return { data, error, isLoading }
}
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return {
    date: `${day}/${month.toString().padStart(2, "0")}/${year}`,
    time: date.toLocaleTimeString(),
  }
}

export function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  timeout = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>): void => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(null, args)
    }, timeout)
  }
}
