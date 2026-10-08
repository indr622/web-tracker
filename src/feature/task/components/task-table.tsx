import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useDeleteTask, useTasks } from '../hooks'
import { StatusChip } from './status-chip'
import { TaskDialog } from './task-dialog'

export function TaskTable() {
  const { data, isLoading, error } = useTasks()
  const remove = useDeleteTask()

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>
  if (error) return <p className="text-destructive">Gagal memuat task: {error.message}</p>

  return (
    <div className="overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {data?.map((t) => (
        <div key={t.id} className="flex items-center justify-between gap-4 border-b px-4 py-3 last:border-b-0 hover:bg-muted/50">
          <div className="flex min-w-0 items-center gap-4">
            <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">#{t.id}</span>
            <div className="min-w-0">
              <Link to="/task/$id" params={{ id: String(t.id) }} className="font-medium hover:text-primary">
                {t.name}
              </Link>
              <p className="truncate text-[13px] text-muted-foreground">{t.description}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <StatusChip status={t.status} />
            <TaskDialog task={t} trigger={<Button size="sm" variant="outline">Edit</Button>} />
            <Button size="sm" variant="destructive" onClick={() => remove.mutate(t.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
      {data?.length === 0 && (
        <p className="px-4 py-8 text-center text-muted-foreground">Belum ada task</p>
      )}
    </div>
  )
}
