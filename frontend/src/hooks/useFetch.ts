import { useQuery, UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import apiClient from '@services/api'

interface UseQueryOptions {
  enabled?: boolean
  staleTime?: number
  cacheTime?: number
  retry?: number | boolean
}

export function useFetch<T = unknown>(
  endpoint: string,
  options?: UseQueryOptions
) {
  return useQuery<T, AxiosError>({
    queryKey: [endpoint],
    queryFn: async () => {
      const response = await apiClient.get<T>(endpoint)
      return response.data
    },
    enabled: options?.enabled !== false,
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
    retry: options?.retry !== undefined ? options.retry : 1,
  })
}

export function usePost<T = unknown, D = unknown>(
  endpoint: string
): UseMutationResult<T, AxiosError, D, unknown> {
  return useMutation({
    mutationFn: async (data: D) => {
      const response = await apiClient.post<T>(endpoint, data)
      return response.data
    },
  })
}

export function usePut<T = unknown, D = unknown>(
  endpoint: string
): UseMutationResult<T, AxiosError, D, unknown> {
  return useMutation({
    mutationFn: async (data: D) => {
      const response = await apiClient.put<T>(endpoint, data)
      return response.data
    },
  })
}

export function useDelete<T = unknown>(
  endpoint: string
): UseMutationResult<T, AxiosError, void, unknown> {
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient.delete<T>(endpoint)
      return response.data
    },
  })
}
