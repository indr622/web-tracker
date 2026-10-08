# web-tracker

Web Task Tracker: React, shadcn/ui, TanStack Query + Router, axios. Package manager: bun.

## Run
- `bun install`
- `bun run dev` (http://localhost:5173), API di `http://localhost:8000` (override: `VITE_API_URL`)

## Struktur
- `src/core`: axios client, query client
- `src/feature/task`: types, api, hooks, components
- `src/routes`: file-based routes (TanStack Router)

## Git workflow
Semantic commit: `chore`, `feature`, `bugfix`, `fix`. Auto commit & push: `sh scripts/commit.sh feature "pesan"`.
