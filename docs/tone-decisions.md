# Tone & Terminology Decisions

> Read when: writing or reviewing UX copy, locale messages, or deck content.

## TL;DR

Current copy tone is intentional. This doc records deviations from brand-system canonical and why they are accepted.

## Overview

### Accepted Terminology Deviations

The following terms differ from `vendor/brand-system/` canonical docs but are **intentionally kept** on the web:

| Web copy uses | Canonical says | Where | Reason |
|---------------|---------------|-------|--------|
| "Three tools" | "Three functional domains" | brand-home.json | Simpler for general audience |
| "judgment transfer/delegation" | "judgment movement" | deck-general, about | Clearer for non-technical readers |
| "decision-making style" | "reasoning patterns + inspectable modes" | thinkprint.json | Consumer-friendly framing |
| "reasoning policy" | "reasoning patterns" | deck-general.json | Operational shorthand |
| "3-layer operating model" | "three functional domains" | deck-general.json | Visual metaphor for deck |
| "decision rights" | "authority flow" | deck-general.json | Audience-appropriate simplification |
| "personality/thinking style" | "reasoning patterns/profile" | deck-thinkprint-overview | Consumer-facing language |
| "judgment sovereignty" | (not in canonical) | deck-general.json | Coined for deck narrative |

If canonical docs are updated to adopt any of these terms, remove from this table.

### Tone Rules

| Area | Tone | Notes |
|------|------|-------|
| Thinkprint "fun projects" section | Playful, gamified | Intentional departure from canonical "reflective, clear, non-fluffy" — approved for the demo/project cards only |
| Thinkprint page (rest) | Reflective, clear | Follows canonical voice |
| JDVP pages/decks | Precise, calm, strategic | Follows canonical voice |
| Deck general awareness section | Direct, slightly confrontational | Intentional — designed to provoke self-reflection |
| About page | Professional, first-person "we" | Company speaking directly |
| Landing hero | Hook-first, question-led | Follows "lead with human questions" principle |

### Korean Locale Rules

| Decision | Rule |
|----------|------|
| Brand name | "버퍼라인" 혼용 허용 (영문 "BufferLine"도 가능) |
| Domain names | JDVP, Thinkprint → 영문 유지. 메타 거버넌스 → 한글 사용 |
| Deck badges | 한글 번역 (예: "마무리", "Thinkprint 덱") |
| Fun Project titles | 영한 혼재 허용 (현행 유지) |

### Protocol Positioning

- JDVP is an **open protocol** — anyone can implement.
- Implementation is independent; BufferLine does not control downstream usage.
- Use "open protocol" in copy. Do not use "open source" unless referring to a specific repo license.

## Detail

### Hedge Words

Brand-system voice guide prohibits: helps, enables, empowers, allows.
Current deck-technical.json uses "allows" once (line ~113). This is a known deviation — fix when next editing that file.

### Thinkprint Pipeline

`thinkprint.json` has duplicate step number "05" (freeze + evaluate) and empty descriptions for "evaluate" and "publish" steps. These are placeholders — fill in when Thinkprint pipeline spec stabilizes.
