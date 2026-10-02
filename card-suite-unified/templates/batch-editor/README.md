# Batch Editor Template Spec

## Purpose & Functional Architecture
A live, pixel-accurate batch card enhancement studio built on the Card Suite Unified design system:
1. **Multi-Scan Selection**: Ingests card scans (or preset verified AEW cards).
2. **Real Canvas Processing**:
   - High-fidelity bicubic resample according to selected multiplier (1x, 2x, 4x).
   - Canvas 2D convolution matrix for unsharp edge contrast.
   - Box blur + difference thresholding for surface denoising.
   - Color grading expansion for deep card blacks and specular foil shine.
3. **Interactive Pixel Comparison**: Split before/after slider comparing real raw input pixels against real enhanced output canvas pixels.
4. **Export Priority**:
   - **Primary Action**: "Download Enhanced PNGs" (ZIP archive or individual high-resolution PNGs).
   - **Secondary Action**: "Export Audit JSON" (relegated to a secondary button in adherence to design principles).
