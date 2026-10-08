import { api } from '@/core/api'
import type { Task, TaskInput } from './types'

export const taskApi = {
  list: () => api.get<Task[]>('/task').then((r) => r.data),
  get: (id: number) => api.get<Task>(`/task/${id}`).then((r) => r.data),
  create: (body: TaskInput) => api.post<Task>('/task', body).then((r) => r.data),
  update: (id: number, body: TaskInput) => api.put<Task>(`/task/${id}`, body).then((r) => r.data),
  remove: (id: number) => api.delete(`/task/${id}`),
}
