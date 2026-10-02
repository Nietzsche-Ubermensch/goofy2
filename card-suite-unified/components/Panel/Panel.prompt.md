# Panel Component Prompt Spec

## Role & Purpose
The surface every dashboard region sits on. Establishes visual boundaries in the dark card-enhancement workspace.

## Tokens
- Background: `#121212` (`var(--csu-surface-panel)`)
- Border: `1px solid #222222` (`var(--csu-surface-border)`)
- Radius: `8px` (`var(--csu-radius-panel)`)
- Padding: `16px` (`var(--csu-space-4)`)

## Accent Tone (`tone="accent"`)
Used exclusively for regions needing a user decision or human review (e.g. OCR confidence below gate, unconfirmed crop coordinates).
- Border: `#ffb000` (`var(--csu-accent-amber)`)
- Box shadow: `0 0 0 1px rgba(255, 176, 0, 0.12), 0 4px 20px rgba(255, 176, 0, 0.08)`

## Usage Guidelines
- Never nest more than 2 panels deep.
- Use `headerAction` for contextually relevant buttons (e.g., "Reset", "Batch Apply").
