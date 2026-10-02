# StatusPill Component Spec

## Visual Design & Token Mapping
- Font: `JetBrains Mono`, `11px`, `font-weight: 500`.
- Border-radius: `4px` (`var(--csu-radius-control)`).
- Padding: `2px 8px`.

## States
1. `queued`:
   - Text/Dot: `#888888`
   - Background: `rgba(136, 136, 136, 0.12)`
   - Border: `rgba(136, 136, 136, 0.3)`
2. `processing`:
   - Text/Dot: `#00ffff`
   - Background: `rgba(0, 255, 255, 0.1)`
   - Border: `rgba(0, 255, 255, 0.35)`
   - Dot has cyan glow.
3. `complete`:
   - Text/Dot: `#ffffff`
   - Background: `rgba(255, 255, 255, 0.1)`
   - Border: `rgba(255, 255, 255, 0.4)`
4. `review-needed`:
   - Text/Dot: `#ffd700`
   - Background: `rgba(255, 215, 0, 0.12)`
   - Border: `rgba(255, 215, 0, 0.35)`
5. `failed`:
   - Text/Dot: `#ff3333`
   - Background: `rgba(255, 51, 51, 0.12)`
   - Border: `rgba(255, 51, 51, 0.35)`
