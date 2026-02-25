#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f AGENTS.md || ! -f CLAUDE.md ]]; then
  echo "ERROR: AGENTS.md and CLAUDE.md must both exist at repo root."
  exit 1
fi

normalize() {
  local f="$1"
  # Compare full body except the first heading line; ignore trailing spaces.
  sed '1d; s/[[:space:]]\+$//' "$f"
}

if ! diff -u <(normalize AGENTS.md) <(normalize CLAUDE.md); then
  echo ""
  echo "ERROR: AGENTS.md and CLAUDE.md are out of sync (excluding title line)."
  echo "Action: apply the same content changes to both files in the same commit."
  exit 1
fi

echo "OK: AGENTS.md and CLAUDE.md are synchronized (excluding title line)."
