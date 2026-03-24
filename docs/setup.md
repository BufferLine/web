# Setup

> Read when: setting up local environment, changing dependencies.

## TL;DR

Next.js App Router + TypeScript + next-intl. Submodule init → npm install → dev.

## Overview

### Stack
- Next.js (App Router) + React + TypeScript
- next-intl (EN / KO)
- brand-system submodule: `vendor/brand-system/`

### Quick Start
```bash
git submodule update --init --recursive
npm install
npm run dev
```

### Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server |
| `npm run lint` | Lint check |
| `npm run build` | Production build |
| `npm run start` | Start production server |

## Detail

- Node version: check `.nvmrc` or `package.json > engines` if present.
- Submodule lives at `vendor/brand-system/`. If it shows empty after clone, run `git submodule update --init --recursive`.
- Environment variables: copy `.env.example` to `.env.local` if the file exists. Never commit `.env*` files.
