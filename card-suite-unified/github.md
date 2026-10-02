# Card Suite Unified — GitHub Association & Sync Spec

## Repository Metadata
- **Source Repository**: `github.com/card-suite/card-suite-unified`
- **Component Subtree**: `frontend/src/design-system/`
- **Last Sync Timestamp**: 2026-09-28T10:00:00Z
- **Upstream Branch**: `main`
- **Tailwind Version**: `v4.3` compatible (`@import "tailwindcss"`)
- **Port Status**: Verbatim token extraction from `frontend/tailwind.config.js` and `frontend/src/index.css`.

## Upstream Token Manifest
```json
{
  "surfaces": {
    "app": "#000000",
    "header": "#0d0d0d",
    "sidebar": "#080808",
    "panel": "#121212",
    "hover": "#1c1c1c",
    "active": "#262626"
  },
  "accent": {
    "amber": "#ffb000",
    "hover": "#ffcc4d",
    "text": "#000000"
  },
  "status": {
    "processing": "#00ffff",
    "complete": "#ffffff",
    "review": "#ffd700",
    "failed": "#ff3333"
  },
  "typography": {
    "ui": "Inter, sans-serif",
    "mono": "JetBrains Mono, monospace"
  },
  "radius": {
    "panel": "8px",
    "control": "4px"
  },
  "spacing": [4, 8, 12, 16, 24, 32]
}
```

## Build Verification
- TypeScript Check: `tsc --noEmit` passes with 0 errors.
- Package Integration: Pure CSS + React component tree with zero runtime dependencies beyond standard React 19.
