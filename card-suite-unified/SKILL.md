---
name: "card-suite-unified"
description: >
  Agent Skills wrapper for the Card Suite Unified design system and dark
  card-enhancement workspace. Enforces verbatim tokens, anti-slop rules,
  human review gates (80% confidence tick), and strict component patterns.
---

# Card Suite Unified — Design System Skill

When building or updating card enhancement dashboards, batch editors, or OCR audit tooling, enforce the following guidelines:

## 1. Surfaces & Spatial Rhythm
- Base application background: strictly `#000000`.
- Navigation / Header: `#0d0d0d`.
- Left Sidebar: `#080808`.
- Card / Region Panels: `#121212` with `1px solid #222222`.
- Hover interactions: `#1c1c1c`. Active presses: `#262626`.
- Corner radii: Exactly `8px` for panels and containers; `4px` for buttons, switches, and sliders.

## 2. Amber Accent & Decision Highlights
- Primary accent color is Amber `#ffb000` (hover `#ffcc4d`).
- Always render `#000000` dark text on Amber button backgrounds for maximum contrast.
- If a card scan or OCR result needs human operator arbitration, set `tone="accent"` on the enclosing `Panel` (`border: 1px solid #ffb000`).

## 3. Workflow Status Tokens
- `processing`: Cyan `#00ffff` (with optional glowing dot or progress bar fill).
- `complete`: Solid Crisp White `#ffffff`.
- `review-needed`: Gold `#ffd700`.
- `failed`: Red `#ff3333`.
- `queued`: Muted Slate Gray `#888888`.

## 4. Typography Rules
- UI Elements: `Inter` (sans-serif), regular 400, medium 500, bold 700.
- Technical Tokens: `JetBrains Mono` strictly for:
  - Card Asset IDs (e.g. `2024_UD_AEW_0960`)
  - Pixel dimensions (e.g. `1200x800`)
  - Confidence percentages (e.g. `94.2%`)
  - Status pills and gate thresholds.

## 5. 80% Review Gate Rule
- Any card metadata field with confidence `< 80%` must automatically switch the card status to `review-needed` and trigger `tone="accent"`.
- The `MetricMeter` component renders a dedicated tick line at `80%` to make the threshold visually unmistakable.
