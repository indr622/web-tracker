export const TASK_STATUSES = ['draft', 'progress', 'finish', 'deployed'] as const
export type TaskStatus = (typeof TASK_STATUSES)[number]

export interface Task {
  id: number
  name: string
  description: string
  status: TaskStatus
}

export type TaskInput = Omit<Task, 'id'>
