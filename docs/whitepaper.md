---
id: web-whitepaper
title: BufferLine Web Whitepaper
status: canonical
visibility: internal
source_type: specification
owner: web
last_reviewed: 2026-03-11
related_entities:
  - web
  - brand-system
---

# Overview

BufferLine Web is the public web surface for BufferLine.

It publishes company messaging, domain landing pages, and presentation decks for the Cognitive OS.

Its smallest standalone output is a bilingual website that presents BufferLine, JDVP, and Thinkprint without requiring any other product surface.

# Problem

BufferLine needs a public surface that states the company frame, domain boundaries, and current narrative in a stable format.

This repository makes those messages visible through landing pages, localized copy, and browser-based decks.

# System Boundaries

In scope:
- Public landing pages for BufferLine, JDVP, Thinkprint, and company/about content
- Deck playback for BufferLine general, JDVP technical, and Thinkprint overview tracks
- English and Korean localization
- SEO, Open Graph images, sitemap, robots, and analytics wiring

Out of scope:
- JDVP measurement execution
- Thinkprint extraction workflows
- Meta Governance simulators
- Auth, user accounts, data persistence, or backend APIs

Current maturity: active public frontend with content and deck delivery.

# Architecture

The repository uses Next.js App Router with locale-prefixed routes.

Page routes compose shared shell components (`Header`, `Footer`) with landing or deck modules.

Landing content lives in `src/components/landing/`.

Deck playback lives in `src/components/deck/` and renders slide arrays inside a client-side vertical navigation layout.

Localized copy lives in `messages/en/` and `messages/ko/` and is loaded through `next-intl`.

Brand rules, company vocabulary, and domain boundaries come from `vendor/brand-system`. This repository does not duplicate that body of knowledge.

# Interfaces

Canonical inputs:
- Route requests for `/{locale}`, `/{locale}/about`, `/{locale}/jdvp`, `/{locale}/thinkprint`, and `/{locale}/deck/*`
- Locale message files in `messages/en/` and `messages/ko/`
- Runtime environment variable `NEXT_PUBLIC_BASE_URL` for metadata base URL

Canonical outputs:
- Static and server-rendered public pages
- Browser-rendered slide decks
- Metadata surfaces: sitemap, robots, manifest, Open Graph image, Twitter image

Key surfaces:
- Locale routing in `src/i18n/routing.ts` and `src/middleware.ts`
- Message loading in `src/i18n/request.ts`
- Shared site shell in `src/components/shared/`
- Deck runtime in `src/components/deck/`

# Current Status

Implemented now:
- Home page with brand hero, stack overview, video section, demo section, and deck links
- Dedicated JDVP, Thinkprint, and About pages
- Deck index and three deck routes: general, technical, and overview
- English and Korean message bundles
- Google Analytics, metadata generation, sitemap, robots, and manifest

Experimental:
- Interactive demo components used on landing surfaces
- Deck content structure as a lightweight presentation system inside the web app

Planned next:
- Content and structure updates that reflect current company messaging
- Additional public surfaces only when they are backed by reviewed implementation or reviewed domain material

# Evidence

- App routes exist under `src/app/[locale]/`
- Deck routes exist under `src/app/[locale]/deck/`
- Localization files exist under `messages/en/` and `messages/ko/`
- Metadata and crawler surfaces exist in `src/app/sitemap.ts`, `src/app/robots.ts`, and social image files
- Repository scripts support local run, lint, build, and production start through `package.json`

# Change Log

- 2026-03-11: Created the canonical web whitepaper at `docs/whitepaper.md`
- 2026-03-11: Aligned the repository to use the `vendor/brand-system` submodule path
- 2026-03-11: Recorded current scope as public landing pages, company pages, localization, and deck delivery only
