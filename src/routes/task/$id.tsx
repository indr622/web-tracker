import { createFileRoute, Link } from '@tanstack/react-router'
import { StatusChip } from '@/feature/task/components/status-chip'
import { useTask } from '@/feature/task/hooks'

export const Route = createFileRoute('/task/$id')({
  component: TaskDetail,
})

function TaskDetail() {
  const { id } = Route.useParams()
  const { data, isLoading, error } = useTask(Number(id))

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>
  if (error || !data) return <p className="text-destructive">Task tidak ditemukan</p>

  return (
    <div className="grid max-w-2xl gap-4">
      <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
        &larr; Kembali
      </Link>
      <div className="grid gap-3 rounded-xl border bg-card p-6">
        <p className="font-mono text-xs text-muted-foreground">#{data.id}</p>
        <h1 className="text-[32px] leading-tight">{data.name}</h1>
        <StatusChip status={data.status} />
        <p className="text-muted-foreground">{data.description}</p>
      </div>
    </div>
  )
}
