import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-10 h-14 border-b bg-card/80 backdrop-blur">
        <div className="mx-auto flex h-full max-w-[1280px] items-center gap-6 px-6">
          <Link to="/" className="font-heading text-lg font-bold tracking-tight">
            Task Tracker
          </Link>
          <Link to="/" className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-muted">
            Tasks
          </Link>
        </div>
      </nav>
      <main className="mx-auto max-w-[1280px] px-6 py-8 md:py-12">
        <Outlet />
      </main>
    </div>
  ),
})
