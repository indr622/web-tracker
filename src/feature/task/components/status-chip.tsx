import { cn } from '@/lib/utils'
import type { TaskStatus } from '../types'

const STYLES: Record<TaskStatus, string> = {
  draft: 'bg-muted text-muted-foreground',
  progress: 'bg-warning/15 text-warning',
  finish: 'bg-success/15 text-success',
  deployed: 'bg-success text-white',
}

export function StatusChip({ status, className }: { status: TaskStatus; className?: string }) {
  return (
    <span
      className={cn('inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium', STYLES[status], className)}
    >
      {status}
    </span>
  )
}
