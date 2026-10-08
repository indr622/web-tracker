import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { taskApi } from './api'
import type { TaskInput } from './types'

const KEY = ['task'] as const

export const useTasks = () => useQuery({ queryKey: KEY, queryFn: taskApi.list })

export const useTask = (id: number) =>
  useQuery({ queryKey: [...KEY, id], queryFn: () => taskApi.get(id) })

function useInvalidating<TVars>(fn: (vars: TVars) => Promise<unknown>) {
  const qc = useQueryClient()
  return useMutation({ mutationFn: fn, onSuccess: () => qc.invalidateQueries({ queryKey: KEY }) })
}

export const useCreateTask = () => useInvalidating((body: TaskInput) => taskApi.create(body))
export const useUpdateTask = () =>
  useInvalidating(({ id, body }: { id: number; body: TaskInput }) => taskApi.update(id, body))
export const useDeleteTask = () => useInvalidating((id: number) => taskApi.remove(id))
