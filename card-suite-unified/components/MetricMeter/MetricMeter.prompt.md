# MetricMeter Component Spec

## Purpose & 80% Review Gate Tick
The MetricMeter displays confidence values for OCR text recognition, metadata extraction quality, and defect severity scoring.
A permanent tick line is anchored at exactly `80%` (`var(--csu-accent-amber)`):
- Values `< 80%`: The card requires operator review and is tinted `#ffd700`.
- Values `>= 80%`: Meets automated export standards and is tinted solid white `#ffffff`.

## Tokens
- Track background: `#1c1c1c` (`var(--csu-surface-hover)`)
- Track height: `8px`
- Gate line: `2px solid #ffb000` with subtle glow
- Numbers: `JetBrains Mono` font
