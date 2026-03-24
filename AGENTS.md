# AGENTS.md

Sync note: Keep all content below this line identical between `AGENTS.md` and `CLAUDE.md` (title line may differ). Update both in the same commit.

> **Progressive disclosure** — this file is L0 (always read).
> Load deeper docs only when the trigger matches your task.

## L0 — Identity & Hard Rules

**BufferLine public web frontend.**

Must-follow rules (no exceptions):
- Keep this repository **public-safe**. Never commit secrets (`.env*`, tokens, keys).
- Do not commit build/runtime artifacts (`.next/`, logs, coverage).
- Keep UX copy aligned with `messages/` locale structure.

## Docs Index

| Doc | Trigger (when to read) |
|-----|------------------------|
| [`docs/setup.md`](docs/setup.md) | Setting up local env, changing dependencies |
| [`docs/site-map.md`](docs/site-map.md) | Adding, modifying, or removing pages |
| [`docs/contribution.md`](docs/contribution.md) | PR, commit, or submodule work |
| [`docs/tone-decisions.md`](docs/tone-decisions.md) | Writing or reviewing UX copy, locale messages |
