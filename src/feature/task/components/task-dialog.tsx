import type * as React from 'react'
import { useState, type ReactNode } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useCreateTask, useUpdateTask } from '../hooks'
import type { Task } from '../types'
import { TaskForm } from './task-form'

export function TaskDialog({ task, trigger }: { task?: Task; trigger: ReactNode }) {
  const [open, setOpen] = useState(false)
  const create = useCreateTask()
  const update = useUpdateTask()
  const pending = create.isPending || update.isPending

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={trigger as React.ReactElement} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task ? 'Edit Task' : 'New Task'}</DialogTitle>
        </DialogHeader>
        <TaskForm
          initial={task}
          submitting={pending}
          onSubmit={(body) => {
            const done = { onSuccess: () => setOpen(false) }
            if (task) update.mutate({ id: task.id, body }, done)
            else create.mutate(body, done)
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
