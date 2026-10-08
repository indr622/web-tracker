import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="mx-auto max-w-4xl p-6">
      <header className="mb-6 flex items-center gap-4 border-b pb-3">
        <h1 className="text-xl font-semibold">Task Tracker</h1>
        <Link to="/">Tasks</Link>
      </header>
      <Outlet />
    </div>
  ),
})
