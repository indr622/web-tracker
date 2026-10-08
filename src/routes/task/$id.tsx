import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { useTask } from '@/feature/task/hooks'

export const Route = createFileRoute('/task/$id')({
  component: TaskDetail,
})

function TaskDetail() {
  const { id } = Route.useParams()
  const { data, isLoading, error } = useTask(Number(id))

  if (isLoading) return <p>Loading...</p>
  if (error || !data) return <p className="text-destructive">Task tidak ditemukan</p>

  return (
    <div className="grid gap-3">
      <Link to="/">&larr; Kembali</Link>
      <h2 className="text-lg font-semibold">
        #{data.id} {data.name}
      </h2>
      <Badge className="w-fit" variant="secondary">
        {data.status}
      </Badge>
      <p>{data.description}</p>
    </div>
  )
}
