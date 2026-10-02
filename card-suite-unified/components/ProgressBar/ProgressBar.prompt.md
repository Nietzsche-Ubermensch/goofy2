# ProgressBar Component Spec

## Visual Design & Workflow Tinting
Track height: `6px`. Track background: `#1c1c1c` (`var(--csu-surface-hover)`). Radius: `4px`.
The fill color is dynamically tied to the card's processing workflow state:
- `processing`: `#00ffff` (Cyan)
- `complete`: `#ffffff` (Solid White)
- `review`: `#ffd700` (Gold)
- `failed`: `#ff3333` (Red)
- `queued`: `#888888` (Neutral Gray)

## Usage
Placed at the bottom of queue item cards, or in the dashboard header for overall batch completion.
Supports optional `showLabel` for displaying textual percentage in JetBrains Mono.
