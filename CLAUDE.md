# CLAUDE.md

## Project
BufferLine public web frontend.

## Stack
- Next.js (App Router)
- React + TypeScript
- next-intl
- brand-system submodule: `brand-system/`

## Local Setup
```bash
git submodule update --init --recursive
npm install
npm run dev
```

## Commands
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run start`

## Contribution Rules
- Keep this repository public-safe.
- Never commit secrets (`.env*`, tokens, keys).
- Do not commit build/runtime artifacts (`.next/`, logs, coverage).
- Prefer small, focused PRs.
- Keep UX copy aligned with `messages/` locale structure.

## Notes
- If brand assets/components are needed, update `brand-system` first and then bump submodule pointer in this repo.
