# Card Suite Unified — Implementation Plan & Build Specification

## 1. Component Hierarchy Tree
```
AppRoot
└── CardSuiteUnifiedWorkspace (Dark Canvas: #000000)
    ├── Header (#0d0d0d)
    │   ├── Brand & Version Status
    │   └── Workspace Tab Navigation (Design System / Batch Editor / Dashboard / Build Spec)
    ├── Main Content Body
    │   ├── [Tab: Design System]
    │   │   ├── FoundationsSpecimens (Surfaces, Accent #ffb000, Status, Typography, Spacing)
    │   │   └── ComponentSpecimensGrid (Panel, Button, StatusPill, ProgressBar, MetricMeter, ControlSlider, ToggleRow)
    │   ├── [Tab: Batch Editor]
    │   │   ├── SourceCardSelector (8 Verified AEW Scans + Custom Uploads)
    │   │   ├── ParameterControlPanel (Scale, Denoise, Unsharp, Contrast, Conservative Toggles)
    │   │   ├── RealCanvasComparisonViewer (Before/After interactive curtain slider on real pixels)
    │   │   └── ExportActionDock (Primary: Download Enhanced PNGs | Secondary: Export Audit JSON)
    │   ├── [Tab: Enhancement Dashboard]
    │   │   ├── QueueOverviewBar (Total, Processing #00ffff, Complete #ffffff, Review #ffd700, Failed #ff3333)
    │   │   ├── ActiveQueueGrid (Panel per card with StatusPill, ProgressBar, and MetricMeter with 80% tick)
    │   │   └── DecisionDrawer (tone="accent" arbitration drawer for confidence <80%)
    │   └── [Tab: Build Spec]
    │       └── Architectural contracts, API endpoints, and Vitest reports
    └── StatusBar (#080808)
```

## 2. State Models & Transitions
- `CardWorkflowState`: `'queued'` → `'processing'` → (`'complete'` | `'review-needed'` | `'failed'`)
- `ReviewGateRule`: If `ocrConfidence < 80%`, the state defaults to `'review-needed'`, triggering `tone="accent"` on the card's `Panel`.
- `OperatorDecision`: `'approved'` | `'rejected'` | `'manual-edit'`.

## 3. API Contracts
- `GET /api/csu/cards`: Returns list of cards in active batch queue.
- `POST /api/csu/cards`: Enqueues new card scan with metadata.
- `POST /api/csu/cards/:id/arbitrate`: Resolves review-needed cards with human operator corrections.
- `GET /api/card-enhancement/models`: Returns list of approved enhancement models & ComfyUI presets.

## 4. Test Plan (Vitest)
- `evaluateCardGate()` unit tests verifying strict boundary at `80%`.
- `ProgressBar` color tinting assertions for all 5 workflow states.
- `MetricMeter` visual gate position calculation ($x = 80\%$).
- Naming convention verification matching asset outputs to CSV columns.

## 5. Library Attribution & Dependency Minimization
- **Tailwind CSS v4**: Zero bloat, verbatim tokens via CSS variables.
- **Inter**: Primary UI typography from Google Fonts.
- **JetBrains Mono**: Technical metadata, ID, and metric reward typography from Google Fonts.
- **Lucide React**: Clean functional icons (Upload, Download, Sparkles, CheckCircle2, ShieldCheck, Sliders, Eye).
- **HTML Canvas 2D API**: Hardware-accelerated local pixel manipulation for zero-latency resample, convolution, and unsharp masking.
