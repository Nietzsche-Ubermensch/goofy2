# ControlSlider Component Spec

## Controls & Plain-Language Hints
Every card enhancement slider must provide an immediate, accessible sentence explaining its effect:
1. `Scale`:
   - Hint: "Multiplier factor for output dimensions (e.g. 2x doubles pixel dimensions via Bicubic resample)."
2. `Denoise`:
   - Hint: "Smooths sensor grain and scanner dust without washing out player borders."
3. `Sharpen`:
   - Hint: "Boosts localized edge contrast along micro-stamped letters and foil contours."
4. `Contrast`:
   - Hint: "Expands dynamic range between deep card blacks and specular reflections."

## Tokens
- Track: `#1c1c1c` (`var(--csu-surface-hover)`)
- Thumb: `#ffb000` (`var(--csu-accent-amber)`), hover `#ffcc4d`
- Thumb size: `14px` with `4px` radius (`var(--csu-radius-control)`)
- Value: `JetBrains Mono` in `#ffb000`
