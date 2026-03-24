# Site Map

> Read when: adding, modifying, or removing pages.

## TL;DR

8 pages, all locale-prefixed (`/en/...`, `/ko/...`) via `src/app/[locale]/`.

## Overview

| Route | Page file | Description |
|-------|-----------|-------------|
| `/` | `page.tsx` | Landing (home) |
| `/about` | `about/page.tsx` | About |
| `/jdvp` | `jdvp/page.tsx` | JDVP introduction |
| `/thinkprint` | `thinkprint/page.tsx` | Thinkprint introduction |
| `/deck` | `deck/page.tsx` | Deck index |
| `/deck/general` | `deck/general/page.tsx` | General deck |
| `/deck/overview` | `deck/overview/page.tsx` | Overview deck |
| `/deck/technical` | `deck/technical/page.tsx` | Technical deck |

## Detail

- All page components live under `src/app/[locale]/`.
- Landing section components: `src/components/landing/`.
- Deck slide components: `src/components/deck/`.
- Shared components (Header, Footer, DeckNav): `src/components/shared/`.
- Locale messages: `messages/{en,ko}/*.json` — add keys for both locales when creating new copy.
- **When you add or remove a page, update this table.**
