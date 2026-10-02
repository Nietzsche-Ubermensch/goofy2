# Button Component Spec

## Variants
- `primary`: Background `#ffb000`, color `#000000`, hover `#ffcc4d`. Used for the single primary call to action per view (e.g. "Run Enhancement", "Download Enhanced Batch").
- `secondary`: Background `#1c1c1c`, color `#ededed`, border `#222222`, hover `#262626`. Used for default actions.
- `ghost`: Transparent background, color `#a0a0a0`, hover `#1c1c1c`. Used for tertiary actions.
- `danger`: Red tint `rgba(255, 51, 51, 0.15)` border `rgba(255, 51, 51, 0.35)`, hover `#ff3333` with `#000000` text. Used for destructive actions (e.g., "Remove Card", "Cancel Job").

## Sizes
- `md`: Height `36px`, padding `0 16px`, font size `13px`, radius `4px`.
- `sm`: Height `28px`, padding `0 12px`, font size `11px`, radius `4px`. Specially optimized for table in-row retry, remove, or download actions.
