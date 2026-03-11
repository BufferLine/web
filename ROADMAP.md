# Roadmap

This document tracks near-term product/content follow-ups for the BufferLine public web frontend.

## Thinkprint landing page (content)

- Add a "minimum trust bridge" on the Thinkprint page: a small, concrete sample of the Thinkprint output artifact (structure + uncertainty/limits), so users can build confidence *before* clicking into the deck/docs.
- Blocker: the Thinkprint protocol / output schema is not fixed yet, so we should not ship a sample artifact until the protocol stabilizes.
- Until then: keep the Thinkprint page lightweight and route deeper persuasion/rigor to the deck and official docs.

## JDVP landing page (content + consistency)

Goal: keep JDVP persuasive without overstating maturity, and ensure the page is internally consistent with the protocol draft.

- **Consistency pass (P0):** ensure the JSV/DV type surfaces match each other across:
  - in-page "code examples"
  - field descriptions / allowed enums
  - demo conversation instrumentation (what values can appear)
- **CTA integrity (P0):** ensure each CTA points to what it claims (e.g., "Read spec" ≠ "Clone repo") and avoid "Coming soon" grids that dead-end without at least one working proof link.
- **Terminology clarity (P1):** avoid unexplained English meta-terms in Korean copy (e.g., normative / non-normative) unless there is an immediate inline explanation or a linked glossary entry.
- **Evidence & reliability framing (P1):** add a compact explanation of:
  - what counts as "evidence" for an observation (self-report vs logs vs inference, etc.)
  - what the "reliability" signal means and what it does *not* mean
  - known failure modes / limitations (so the page reads as a protocol, not a vibe)
- **Demo scope (P2):** broaden or contextualize the demo so it reads as a general observation protocol (not a finance-specific story).

Blocker / gating:
- If the protocol draft (schema + reliability method) is still moving, keep the JDVP page opinionated but avoid hard commitments (exact enum sets, scoring semantics, etc.) until stabilized.

## Brand-system alignment (source of truth + drift prevention)

Goal: treat `vendor/brand-system/` as the canonical source for protocol vocabulary and schema so the web UI cannot silently drift.

- **Define canonical assets (P0):**
  - glossary / definitions
  - schema snippets (JSV/DV + evidence + reliability)
  - versioning policy for these assets (e.g., semver, backwards-compat notes)
- **Add a consistency check (P0):** a lightweight script run in CI that fails if:
  - web copy references fields/enums that aren't in the canonical definitions
  - UI "code examples" diverge from canonical snippets
  - demo instrumentation emits values outside the canonical enum set
- **Decide integration strategy (P1):**
  - import canonical JSON/YAML directly at build time, or
  - generate web-consumable artifacts from `vendor/brand-system/` (preferred if we want stronger guarantees)
- **Make drift visible (P1):** add a one-line "protocol draft version" stamp in the JDVP page footer/hero (only if it can be sourced automatically).
