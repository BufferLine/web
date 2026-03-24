# Contribution

> Read when: making a PR, committing code, or working with the brand submodule.

## TL;DR

Small focused PRs. No secrets. No build artifacts. Brand changes go through submodule first.

## Overview

### Rules
- Keep this repository **public-safe**.
- Never commit secrets (`.env*`, tokens, keys).
- Do not commit build/runtime artifacts (`.next/`, logs, coverage).
- Prefer small, focused PRs.
- Keep UX copy aligned with `messages/` locale structure.

### PR Workflow
1. Branch from `main`.
2. Make changes, run `npm run lint` and `npm run build` before pushing.
3. Open PR against `main`.

## Detail

### Brand Submodule
- Located at `vendor/brand-system/` (repo: `BufferLine/brand-system`).
- If brand assets or components need updating, **change `brand-system` first**, merge there, then bump the submodule pointer in this repo:
  ```bash
  cd vendor/brand-system
  git checkout main && git pull
  cd ../..
  git add vendor/brand-system
  git commit -m "chore: bump brand-system submodule"
  ```

### Copy Direction
- Core framing: **think, decide, trust** (maps to Thinkprint, JDVP, Meta Governance).
- Lead with human questions, not technical jargon.
- Progressive disclosure in UX copy: hook → what → why → how → try.
