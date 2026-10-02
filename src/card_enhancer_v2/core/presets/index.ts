import { EnhancementParameters, EnhancementPreset } from '../../types';

export const DEFAULT_ENHANCEMENT_PARAMS: EnhancementParameters = {
  brightness: 0.15, // +15% EV Gain
  contrast: 1.15,
  saturation: 1.10,
  vibrance: 0.20,
  temperature: 0.0,
  
  sharpenFine: 0.85,
  sharpenWide: 0.40,
  clarity: 0.30,
  
  upscaleFactor: 2,
  srModel: 'RealESRGAN_x4plus',
  codeformerWeight: 0.65, // Balanced fidelity
  
  descratchEnabled: true,
  descratchThreshold: 0.12,
  descratchRadius: 4.5,
  showScratchMask: false,
  microDustFilter: true,
  
  holoFoilClarity: false,
  antiGlare: false,
  specularBoost: 0.0,
  vintagePaperPreserve: false,
};

export const ENHANCER_PRESETS: EnhancementPreset[] = [
  {
    id: 'studio-crisp-pro',
    name: 'Raw Wrestling Studio Crisp',
    category: 'Raw Wrestling',
    badge: 'Raw Standard',
    description: 'High dynamic range light balancing, ring attire color separation, and automatic micro-dust cleanup on raw cards.',
    engine: 'WebGL_GPU_Realtime',
    params: {
      brightness: 0.20,
      contrast: 1.20,
      saturation: 1.12,
      vibrance: 0.25,
      sharpenFine: 1.10,
      sharpenWide: 0.45,
      descratchEnabled: true,
      descratchThreshold: 0.10,
      descratchRadius: 3.5,
      codeformerWeight: 0.70,
      upscaleFactor: 2,
    }
  },
  {
    id: 'modern-gold-prizm',
    name: 'WWE Prizm & Topps Chrome Refractor',
    category: 'Modern Prizm',
    badge: 'Refractor Glow',
    description: 'Specially calibrated specular curve for WWE & AEW chromium cards, popping championship belt gold & refractor prisms.',
    engine: 'WebGL_GPU_Realtime',
    params: {
      brightness: 0.10,
      contrast: 1.25,
      saturation: 1.30,
      vibrance: 0.45,
      sharpenFine: 1.40,
      sharpenWide: 0.60,
      holoFoilClarity: true,
      specularBoost: 0.60,
      antiGlare: true,
      descratchEnabled: true,
      descratchThreshold: 0.14,
      descratchRadius: 5.0,
      codeformerWeight: 0.50,
      upscaleFactor: 2,
    }
  },
  {
    id: 'vintage-1985-wwf',
    name: '1985 WWF & 90s WCW Wax Pack',
    category: 'Vintage WWF/WCW',
    badge: 'Cardstock Safe',
    description: 'Preserves authentic 80s/90s wrestling cardboard pulp grain, softens aged yellowing, and prevents digital pixelation.',
    engine: 'RealESRNet_x4plus',
    params: {
      brightness: 0.12,
      contrast: 1.08,
      saturation: 1.02,
      vibrance: 0.10,
      temperature: -0.08, // Cool down yellowing
      sharpenFine: 0.60,
      sharpenWide: 0.25,
      vintagePaperPreserve: true,
      descratchEnabled: true,
      descratchThreshold: 0.08,
      descratchRadius: 3.0,
      codeformerWeight: 0.90, // High grain preservation
      upscaleFactor: 2,
    }
  },
  {
    id: 'ultra-hd-text-stats',
    name: 'On-Card Autograph & Match Stats',
    category: 'Autographs & Relics',
    badge: 'Pen Legibility',
    description: 'High micro-contrast optimized for wrestler ink signatures, serial numbering foils, and back career statistics.',
    engine: 'RealESRGAN_x4plus',
    params: {
      brightness: 0.15,
      contrast: 1.30,
      saturation: 1.00,
      vibrance: 0.05,
      sharpenFine: 1.80,
      sharpenWide: 0.70,
      clarity: 0.65,
      descratchEnabled: false,
      codeformerWeight: 0.40,
      upscaleFactor: 4,
    }
  },
  {
    id: 'lucha-holo-refractor',
    name: 'Lucha Libre & All Elite Chromium',
    category: 'Modern Prizm',
    badge: 'Holo Prism',
    description: 'Boosts vibrant ink saturation for ring gear, arena entrance pyro, and raw holographic foil card borders.',
    engine: 'RealESRGAN_Anime_6B',
    params: {
      brightness: 0.18,
      contrast: 1.22,
      saturation: 1.40,
      vibrance: 0.50,
      sharpenFine: 1.50,
      sharpenWide: 0.50,
      holoFoilClarity: true,
      specularBoost: 0.45,
      descratchEnabled: true,
      descratchThreshold: 0.15,
      descratchRadius: 4.0,
      codeformerWeight: 0.40,
      upscaleFactor: 2,
    }
  },
  {
    id: 'deep-raw-surface-clean',
    name: 'Deep Raw Card Surface Clean',
    category: 'Restoration',
    badge: 'Inpainting',
    description: 'Wide-radius Navier-Stokes isophote scratch transport to remove heavy raw card scuffs, sleeve lines, and scanner bed artifacts.',
    engine: 'NavierStokes_Inpainting',
    params: {
      brightness: 0.15,
      contrast: 1.15,
      saturation: 1.05,
      vibrance: 0.15,
      sharpenFine: 0.90,
      sharpenWide: 0.35,
      descratchEnabled: true,
      descratchThreshold: 0.18,
      descratchRadius: 8.5,
      microDustFilter: true,
      codeformerWeight: 0.60,
      upscaleFactor: 2,
    }
  }
];
