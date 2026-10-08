import { Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useDeleteTask, useTasks } from '../hooks'
import { TaskDialog } from './task-dialog'

export function TaskTable() {
  const { data, isLoading, error } = useTasks()
  const remove = useDeleteTask()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p className="text-destructive">Gagal memuat task: {error.message}</p>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16">ID</TableHead>
          <TableHead>Task Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-48" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((t) => (
          <TableRow key={t.id}>
            <TableCell>{t.id}</TableCell>
            <TableCell>
              <Link to="/task/$id" params={{ id: String(t.id) }} className="underline">
                {t.name}
              </Link>
            </TableCell>
            <TableCell>{t.description}</TableCell>
            <TableCell>
              <Badge variant="secondary">{t.status}</Badge>
            </TableCell>
            <TableCell className="space-x-2 text-right">
              <TaskDialog task={t} trigger={<Button size="sm" variant="outline">Edit</Button>} />
              <Button size="sm" variant="destructive" onClick={() => remove.mutate(t.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {data?.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-muted-foreground">
              Belum ada task
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
