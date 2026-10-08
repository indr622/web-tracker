import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { TaskDialog } from '@/feature/task/components/task-dialog'
import { TaskTable } from '@/feature/task/components/task-table'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="grid gap-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Workspace</p>
          <h1 className="text-[32px] leading-tight">Tasks</h1>
        </div>
        <TaskDialog trigger={<Button>New Task</Button>} />
      </div>
      <TaskTable />
    </div>
  ),
})
