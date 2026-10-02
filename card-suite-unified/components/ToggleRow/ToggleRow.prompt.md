# ToggleRow Component Spec

## Visual Design & Consequence Labeling
Every toggle switch in the workspace must explain the real-world processing consequence of enabling or disabling it. Users must not be left guessing how a filter setting alters the card raster.

## Token Mapping
- Label: `#ededed`, font-size `13px`, font-weight `500`.
- Consequence: `#888888`, font-size `11px`, line-height `1.4`.
- Switch track (off): `#262626` (`var(--csu-surface-active)`), border `#222222`.
- Switch thumb (off): `#888888`, size `14px`.
- Switch track (on): `#ffb000` (`var(--csu-accent-amber)`).
- Switch thumb (on): `#000000`.

## Standard Consequence Strings
- `Conservative Edge Crop`: "Inscribes quad 1.5% inward to guarantee no black scanner bed sliver appears on raw card edges."
- `Descratch Inpainting`: "Fills micro-voids and surface dust on raw wrestling card gloss finishes using Navier-Stokes fluid diffusion."
- `Auto-Calibrate Metadata`: "Matches extracted wrestler name against official WWE/AEW/WCW/WWF checklist database."
