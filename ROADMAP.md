# Roadmap

This document tracks near-term product/content follow-ups for the BufferLine public web frontend.

## Repository contract and docs

Goal: keep this repository aligned with the current `brand-system` knowledge contract.

- `P0`: keep [`docs/whitepaper.md`](docs/whitepaper.md) as a repo whitepaper, not a protocol whitepaper.
- `P0`: reflect current public-web scope only: landing pages, company pages, decks, localization, SEO, and analytics.
- `P1`: add a short maintenance rule in README or docs that protocol definitions live in their canonical protocol repos, not in this web repo.

## Copy policy alignment

Goal: bring public copy into line with current brand voice and domain-boundary rules.

- `P0`: remove hedge wording from public copy where the current text says "helps", "allows", or equivalent.
- `P0`: remove phrasing that implies JDVP, Thinkprint, or Meta Governance require one another.
- `P0`: keep JDVP language observational. Avoid normative framing about delegation.
- `P1`: review Korean copy for unexplained English policy terms and replace them with direct Korean wording or a linked definition.
- `P1`: review CTA labels so they describe the actual target surface.

## JDVP surface consistency

Goal: keep JDVP landing and deck content concrete without overstating protocol maturity.

- `P0`: verify that JSV/DV examples, field names, and enums match the current canonical protocol material.
- `P0`: verify that demo instrumentation does not emit values outside the current protocol draft.
- `P1`: add a compact evidence and limitation block so the JDVP page states what the current surface shows and what it does not claim.
- `P1`: keep demo framing general enough that the page reads as an observation protocol, not a domain-specific app.

## Thinkprint surface consistency

Goal: keep Thinkprint pages aligned with the current extraction-domain story.

- `P0`: review Thinkprint landing copy for speculative product claims that are ahead of reviewed protocol material.
- `P1`: keep the page lightweight until the output artifact and evaluation language are stable.
- `P1`: verify that links to decks and protocol docs point to the intended canonical source.

## Brand-system integration

Goal: treat `vendor/brand-system/` as the canonical source for shared vocabulary, domain boundaries, and reusable protocol-facing snippets.

- `P0`: decide which artifacts should be sourced directly from `vendor/brand-system/`.
- `P0`: add a consistency check that catches copy or example drift against canonical definitions.
- `P1`: choose one integration path:
  - import canonical JSON or YAML directly at build time
  - generate web-facing artifacts from `vendor/brand-system/`
- `P1`: expose a visible version or revision marker only if it can be sourced automatically from canonical material.
