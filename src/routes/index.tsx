import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { TaskDialog } from '@/feature/task/components/task-dialog'
import { TaskTable } from '@/feature/task/components/task-table'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="grid gap-4">
      <div className="flex justify-end">
        <TaskDialog trigger={<Button>New Task</Button>} />
      </div>
      <TaskTable />
    </div>
  ),
})
