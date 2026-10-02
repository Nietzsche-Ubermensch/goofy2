import { CardItem, CropQuad, CardMetadataTags } from '../types';

function createSampleCardCanvas(type: 'raw_prizm_wwe' | 'raw_aew_diamond' | 'raw_vintage_wwf' | 'raw_wcw_nitro'): string {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 1120; // Exact raw card 2.5 : 3.5 ratio
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background / Surface table canvas (scanner bed)
  ctx.fillStyle = '#10141f';
  ctx.fillRect(0, 0, 800, 1120);

  // Raw Card Geometry (unencapsulated, true cardboard borders)
  const cardX = 90;
  const cardY = 110;
  const cardW = 620;
  const cardH = 900;

  // Natural shadow behind raw card
  ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 8;
  ctx.shadowOffsetY = 12;

  if (type === 'raw_prizm_wwe') {
    // 2024 Panini Prizm WWE - Roman Reigns Silver Prizm Raw Card
    // Pure raw card white border
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.shadowBlur = 0;

    // Prismatic Refractor Field
    const prizmGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
    prizmGrad.addColorStop(0, '#e2e8f0');
    prizmGrad.addColorStop(0.2, '#fbcfe8');
    prizmGrad.addColorStop(0.4, '#c7d2fe');
    prizmGrad.addColorStop(0.6, '#bae6fd');
    prizmGrad.addColorStop(0.8, '#a7f3d0');
    prizmGrad.addColorStop(1, '#fde68a');

    ctx.fillStyle = prizmGrad;
    ctx.fillRect(cardX + 24, cardY + 24, cardW - 48, cardH - 48);

    // Inner Chrome Bezel
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 4;
    ctx.strokeRect(cardX + 30, cardY + 30, cardW - 60, cardH - 60);

    // Header: PANINI PRIZM WWE
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 24px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ PANINI PRIZM WWE • RAW SILVER', cardX + cardW / 2, cardY + 70);

    // Wrestler Portrait Silhouette Box
    const artBoxGrad = ctx.createLinearGradient(cardX, cardY + 90, cardX, cardY + 680);
    artBoxGrad.addColorStop(0, '#1e293b');
    artBoxGrad.addColorStop(1, '#090d16');
    ctx.fillStyle = artBoxGrad;
    ctx.fillRect(cardX + 45, cardY + 90, cardW - 90, 560);

    // Tribal Chief / Bloodline Gold Emblem
    ctx.fillStyle = '#eab308';
    ctx.beginPath();
    ctx.arc(cardX + cardW / 2, cardY + 330, 130, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 64px sans-serif';
    ctx.fillText('☝️', cardX + cardW / 2, cardY + 355);

    // Wrestler Name Banner
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(cardX + 45, cardY + 665, cardW - 90, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px sans-serif';
    ctx.fillText('ROMAN REIGNS', cardX + cardW / 2, cardY + 715);

    // Card Footer: Raw Centering & Series
    ctx.fillStyle = '#334155';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('UNDISPUTED WWE CHAMPION • RAW 50/50', cardX + cardW / 2, cardY + 775);

  } else if (type === 'raw_aew_diamond') {
    // 2024 Upper Deck AEW - Kenny Omega Black Diamond Raw Card
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.shadowBlur = 0;

    // Diamond Facet Outer Border
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(cardX + 16, cardY + 16, cardW - 32, cardH - 32);

    // Inner Obsidian Sheen
    const obsGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
    obsGrad.addColorStop(0, '#161b22');
    obsGrad.addColorStop(0.5, '#21262d');
    obsGrad.addColorStop(1, '#0d1117');
    ctx.fillStyle = obsGrad;
    ctx.fillRect(cardX + 30, cardY + 30, cardW - 60, cardH - 60);

    // Header
    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 24px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('UPPER DECK AEW • BLACK DIAMOND', cardX + cardW / 2, cardY + 75);

    // Relic Patch Swatch Frame
    ctx.fillStyle = '#030712';
    ctx.fillRect(cardX + 50, cardY + 105, cardW - 100, 360);

    // Real Fabric Patch Swatch simulation
    const patchX = cardX + 90;
    const patchY = cardY + 150;
    const patchW = cardW - 180;
    const patchH = 260;
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(patchX, patchY, patchW, patchH);

    // Patch Embroidery Pattern
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 8;
    ctx.strokeRect(patchX + 20, patchY + 20, patchW - 40, patchH - 40);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('AUTHENTIC MATCH-WORN PATCH', cardX + cardW / 2, patchY + patchH / 2 + 8);

    // Name & Certified Auto
    ctx.fillStyle = '#f8fafc';
    ctx.font = '900 40px sans-serif';
    ctx.fillText('KENNY OMEGA', cardX + cardW / 2, cardY + 535);

    // Gold Ink Signature simulation
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cardX + 150, cardY + 620);
    ctx.bezierCurveTo(cardX + 220, cardY + 570, cardX + 290, cardY + 650, cardX + 380, cardY + 590);
    ctx.bezierCurveTo(cardX + 420, cardY + 560, cardX + 460, cardY + 640, cardX + 510, cardY + 610);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 18px monospace';
    ctx.fillText('CERTIFIED ON-CARD AUTOGRAPH • SERIAL 15/25', cardX + cardW / 2, cardY + 675);

  } else if (type === 'raw_vintage_wwf') {
    // 1985 Topps WWF - Hulk Hogan Classic Raw Vintage Card
    // Aged cream cardboard stock
    ctx.fillStyle = '#faf4e6';
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.shadowBlur = 0;

    // Classic 1985 Blue / Red Outer Frame
    ctx.strokeStyle = '#1e3a8a';
    ctx.lineWidth = 6;
    ctx.strokeRect(cardX + 20, cardY + 20, cardW - 40, cardH - 40);

    // WWF Logo Banner
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(cardX + 40, cardY + 40, cardW - 80, 80);

    ctx.fillStyle = '#fef08a';
    ctx.font = '900 38px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('WWF WRESTLING STARS', cardX + cardW / 2, cardY + 95);

    // Center Match Arena Art Box
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(cardX + 50, cardY + 140, cardW - 100, 520);

    // Vintage Ring Graphic
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(cardX + cardW / 2, cardY + 380, 160, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fef08a';
    ctx.font = '900 48px sans-serif';
    ctx.fillText('HULK', cardX + cardW / 2, cardY + 365);
    ctx.fillText('HOGAN', cardX + cardW / 2, cardY + 420);

    // Name Plate
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(cardX + 40, cardY + 685, cardW - 80, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 34px sans-serif';
    ctx.fillText('WORLD HEAVYWEIGHT CHAMPION', cardX + cardW / 2, cardY + 740);

    ctx.fillStyle = '#475569';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('1985 TOPPS WWF SERIES 1 #1 • RAW VINTAGE', cardX + cardW / 2, cardY + 805);

  } else {
    // 1999 Topps WCW Nitro - Sting Monday Nitro Raw Refractor
    ctx.fillStyle = '#05070f';
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.shadowBlur = 0;

    // Nitro Neon Red & Silver Refractor Frame
    const nitroGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
    nitroGrad.addColorStop(0, '#ef4444');
    nitroGrad.addColorStop(0.5, '#f8fafc');
    nitroGrad.addColorStop(1, '#ef4444');
    ctx.strokeStyle = nitroGrad;
    ctx.lineWidth = 8;
    ctx.strokeRect(cardX + 18, cardY + 18, cardW - 36, cardH - 36);

    // WCW Monday Nitro Header
    ctx.fillStyle = '#ef4444';
    ctx.font = '900 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('WCW MONDAY NITRO', cardX + cardW / 2, cardY + 75);

    // Inner Stage Steel Grate
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cardX + 45, cardY + 100, cardW - 90, 560);

    // Scorpion Graphic Emblem
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 80px sans-serif';
    ctx.fillText('🦂', cardX + cardW / 2, cardY + 360);

    ctx.font = '900 48px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('STING', cardX + cardW / 2, cardY + 450);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('THE ICON • WCW WORLD CHAMPION', cardX + cardW / 2, cardY + 510);

    // Raw Card Refractor Footer
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('1999 TOPPS WCW CHROMIUM • RAW SINGLE', cardX + cardW / 2, cardY + 750);
  }

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond Hikaru Shida Event Logo Patches Auto card
 * (Matches Year-Manfucturer-Card-0960.jpg uploaded by the user)
 */
export function createHikaruShidaCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800; // Landscape orientation matching scan
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Scanner bed background (dark textured)
  ctx.fillStyle = '#101216';
  ctx.fillRect(0, 0, 1200, 800);

  // Card geometry inside scanner bed
  const cardX = 40;
  const cardY = 30;
  const cardW = 1120;
  const cardH = 740;

  // Dark slate stone border
  ctx.fillStyle = '#1a1c22';
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Gold foil corner accents
  ctx.fillStyle = '#b89047';
  ctx.fillRect(cardX, cardY, 60, cardH);
  ctx.fillRect(cardX + cardW - 120, cardY, 120, cardH);

  // Right Gold Banner: "BLACK DIAMOND" & "AEW EVENT LOGO PATCHES"
  ctx.save();
  ctx.translate(cardX + cardW - 60, cardY + cardH / 2);
  ctx.rotate(Math.PI / 2);
  ctx.fillStyle = '#0a0d14';
  ctx.font = 'bold 32px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('BLACK DIAMOND', 0, -15);
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('AEW EVENT LOGO PATCHES', 0, 15);
  ctx.restore();

  // Left Autograph window (light blue frosted background)
  const autoX = cardX + 90;
  const autoY = cardY + 90;
  const autoW = 190;
  const autoH = 560;
  ctx.fillStyle = 'rgba(173, 216, 230, 0.45)';
  ctx.fillRect(autoX, autoY, autoW, autoH);
  ctx.strokeStyle = '#60a5fa';
  ctx.lineWidth = 2;
  ctx.strokeRect(autoX, autoY, autoW, autoH);

  // Blue ink cursive signature: "Hikaru Shida"
  ctx.save();
  ctx.translate(autoX + autoW / 2, autoY + autoH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = '#1d4ed8';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  // Stylized signature strokes
  ctx.moveTo(-180, 0);
  ctx.bezierCurveTo(-140, -40, -100, 30, -60, -10);
  ctx.bezierCurveTo(-20, -50, 40, 40, 80, -20);
  ctx.bezierCurveTo(120, -60, 150, 20, 190, 0);
  ctx.stroke();
  ctx.restore();

  // Center: Recessed Die-Cut Window for Event Patch
  const patchX = cardX + 310;
  const patchY = cardY + 130;
  const patchW = 620;
  const patchH = 480;

  // Silver beveled window border
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 8;
  ctx.strokeRect(patchX, patchY, patchW, patchH);

  // Black fabric patch texture
  ctx.fillStyle = '#0f1117';
  ctx.fillRect(patchX + 4, patchY + 4, patchW - 8, patchH - 8);

  // "FULL GEAR" embroidered cog logo
  ctx.fillStyle = '#eab308';
  ctx.beginPath();
  ctx.arc(patchX + patchW / 2, patchY + patchH / 2, 110, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#0f1117';
  ctx.beginPath();
  ctx.arc(patchX + patchW / 2, patchY + patchH / 2, 70, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('FULL GEAR', patchX + patchW / 2, patchY + patchH / 2 + 12);

  // Subject Header (Hikaru Shida portrait area)
  ctx.fillStyle = '#ec4899';
  ctx.beginPath();
  ctx.arc(patchX + patchW / 2, cardY + 70, 45, 0, Math.PI * 2);
  ctx.fill();

  // Bottom Name: "HIKARU SHIDA"
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('HIKARU SHIDA', patchX + patchW / 2, cardY + cardH - 35);

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond Julia Hart Squared Circle Gems #36/99 card
 * (Matches Year-Manfucturer-Card-0968.jpg uploaded by the user)
 */
export function createJuliaHartCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Scanner bed dark background
  ctx.fillStyle = '#0a0c10';
  ctx.fillRect(0, 0, 1200, 800);

  // Card geometry inside scanner
  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Dark gothic black diamond faceted texture
  ctx.fillStyle = '#13161c';
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Diamond facets background pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < cardW; i += 80) {
    ctx.beginPath();
    ctx.moveTo(cardX + i, cardY);
    ctx.lineTo(cardX + i + 100, cardY + cardH);
    ctx.stroke();
  }

  // Right Rail: "BLACK DIAMOND"
  ctx.save();
  ctx.translate(cardX + cardW - 55, cardY + cardH / 2);
  ctx.rotate(Math.PI / 2);
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 36px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('BLACK DIAMOND', 0, 0);
  ctx.restore();

  // Left Emblem: "SQUARED CIRCLE GEMS" + "AEW" + "JULIA HART"
  const emblemX = cardX + 180;
  const emblemY = cardY + cardH / 2;

  ctx.save();
  ctx.translate(emblemX, emblemY);
  ctx.rotate(-Math.PI / 6);
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 4;
  ctx.strokeRect(-120, -120, 240, 240);

  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SQUARED CIRCLE', 0, -30);
  ctx.fillText('GEMS', 0, 0);

  ctx.fillStyle = '#fbbf24';
  ctx.font = '900 28px sans-serif';
  ctx.fillText('AEW', 0, 40);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('JULIA HART', 0, 75);
  ctx.restore();

  // Julia Hart Gothic Figure Silhouette
  ctx.fillStyle = '#475569';
  ctx.beginPath();
  ctx.arc(cardX + 680, cardY + 340, 150, 0, Math.PI * 2);
  ctx.fill();

  // Blonde hair & black crown highlights
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(cardX + 700, cardY + 280, 70, 0, Math.PI * 2);
  ctx.fill();

  // Stamped Serial Number #36/99 in bottom right foil
  ctx.fillStyle = '#ca8a04'; // Gold foil stamp
  ctx.font = '900 32px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('36/99', cardX + cardW - 120, cardY + cardH - 50);

  return canvas.toDataURL('image/png');
}

/**
 * Returns the exact card representations for the user-tested AEW Black Diamond cards
 * with all metadata fields pre-calibrated.
 */
/**
 * Recreates the tested AEW Black Diamond Darby Allin Relic #45/99 card
 * (Matches Year-Manfucturer-Card-1018.jpg uploaded by the user)
 */
export function createDarbyAllinCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Dark scanner bed background
  ctx.fillStyle = '#0b0d12';
  ctx.fillRect(0, 0, 1200, 800);

  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Obsidian card stock with purple smoke gradient
  const bgGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  bgGrad.addColorStop(0, '#12131a');
  bgGrad.addColorStop(0.5, '#1e142b');
  bgGrad.addColorStop(1, '#0e0e14');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Border accents
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 3;
  ctx.strokeRect(cardX + 15, cardY + 15, cardW - 30, cardH - 30);

  // Left Window: Dual Relic Swatch (Fabric & Skateboard Grip)
  const relicX = cardX + 80;
  const relicY = cardY + 120;
  const relicW = 280;
  const relicH = 500;

  ctx.fillStyle = '#18181b';
  ctx.fillRect(relicX, relicY, relicW, relicH);
  ctx.strokeStyle = '#d4d4d8';
  ctx.lineWidth = 4;
  ctx.strokeRect(relicX, relicY, relicW, relicH);

  // Upper swatch
  ctx.fillStyle = '#27272a';
  ctx.fillRect(relicX + 25, relicY + 30, relicW - 50, 190);
  ctx.fillStyle = '#a855f7';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('EVENT RELIC', relicX + relicW / 2, relicY + 130);

  // Lower swatch
  ctx.fillStyle = '#1e1e24';
  ctx.fillRect(relicX + 25, relicY + 260, relicW - 50, 190);
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('SKATEBOARD GRIP', relicX + relicW / 2, relicY + 360);

  // Center/Right: Darby Allin Skull Facepaint Subject Area
  ctx.fillStyle = '#3f3f46';
  ctx.beginPath();
  ctx.arc(cardX + 680, cardY + 330, 160, 0, Math.PI * 2);
  ctx.fill();

  // Skull facepaint contrast half
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.arc(cardX + 680, cardY + 330, 160, -Math.PI / 2, Math.PI / 2);
  ctx.fill();

  // Branding: UPPER DECK & AEW LOGOS
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '900 24px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('UPPER DECK · AEW', cardX + 40, cardY + 65);

  // Right Header: "BLACK DIAMOND"
  ctx.save();
  ctx.translate(cardX + cardW - 50, cardY + cardH / 2);
  ctx.rotate(Math.PI / 2);
  ctx.fillStyle = '#c084fc';
  ctx.font = 'bold 32px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('BLACK DIAMOND DUAL RELIC', 0, 0);
  ctx.restore();

  // Bottom Name: DARBY ALLIN
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DARBY ALLIN', cardX + 680, cardY + cardH - 55);

  // Stamped Serial Number #45/99 in silver foil
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '900 28px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('45/99', cardX + cardW - 100, cardY + cardH - 45);

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond Kenny Omega Gemography #15/25 card
 * (Matches Year-Manfucturer-Card-1019.jpg uploaded by the user)
 */
export function createKennyOmegaCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#0a0b10';
  ctx.fillRect(0, 0, 1200, 800);

  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Ruby Diamond faceted deep red background
  const rubyGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  rubyGrad.addColorStop(0, '#3b0712');
  rubyGrad.addColorStop(0.5, '#7f1d1d');
  rubyGrad.addColorStop(1, '#1c050a');
  ctx.fillStyle = rubyGrad;
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Ruby Facet Pattern
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.25)';
  ctx.lineWidth = 2;
  for (let i = 0; i < cardW; i += 90) {
    ctx.beginPath();
    ctx.moveTo(cardX + i, cardY);
    ctx.lineTo(cardX + i + 120, cardY + cardH);
    ctx.stroke();
  }

  // Gold foil perimeter frame
  ctx.strokeStyle = '#eab308';
  ctx.lineWidth = 5;
  ctx.strokeRect(cardX + 20, cardY + 20, cardW - 40, cardH - 40);

  // Title: "GEMOGRAPHY" & "RUBY DIAMOND"
  ctx.fillStyle = '#fef08a';
  ctx.font = '900 28px monospace';
  ctx.textAlign = 'left';
  ctx.fillText('BLACK DIAMOND · GEMOGRAPHY', cardX + 45, cardY + 70);

  // Kenny Omega Figure
  ctx.fillStyle = '#450a0a';
  ctx.beginPath();
  ctx.arc(cardX + 400, cardY + 360, 170, 0, Math.PI * 2);
  ctx.fill();

  // One-Winged Angel pose hair accent
  ctx.fillStyle = '#fde047';
  ctx.beginPath();
  ctx.arc(cardX + 410, cardY + 290, 75, 0, Math.PI * 2);
  ctx.fill();

  // Autograph Window
  const autoX = cardX + 660;
  const autoY = cardY + 200;
  const autoW = 380;
  const autoH = 340;

  ctx.fillStyle = 'rgba(254, 240, 138, 0.15)';
  ctx.fillRect(autoX, autoY, autoW, autoH);
  ctx.strokeStyle = '#eab308';
  ctx.lineWidth = 2;
  ctx.strokeRect(autoX, autoY, autoW, autoH);

  // Inked Autograph "Kenny Omega"
  ctx.strokeStyle = '#f8fafc';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(autoX + 40, autoY + autoH / 2);
  ctx.bezierCurveTo(autoX + 100, autoY + 60, autoX + 160, autoY + autoH - 60, autoX + 220, autoY + autoH / 2);
  ctx.bezierCurveTo(autoX + 280, autoY + 80, autoX + 320, autoY + autoH - 80, autoX + 350, autoY + autoH / 2);
  ctx.stroke();

  // Bottom Name: KENNY OMEGA
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 38px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('KENNY OMEGA', cardX + 660, cardY + cardH - 60);

  // Stamped Serial Number #15/25 in ruby-gold
  ctx.fillStyle = '#fbbf24';
  ctx.font = '900 32px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('15/25', cardX + cardW - 70, cardY + cardH - 60);

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond MJF World Championship Auto #01/10 card
 * (Matches Year-Manfucturer-Card-1020.jpg uploaded by the user)
 */
export function createMjfCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#0d0f14';
  ctx.fillRect(0, 0, 1200, 800);

  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Burberry Tan & Gold Checkered Luxury motif
  ctx.fillStyle = '#1c1917';
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Championship Gold Border
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 6;
  ctx.strokeRect(cardX + 18, cardY + 18, cardW - 36, cardH - 36);

  // Checkered Scarf Pattern Strip at top
  const scarfH = 50;
  ctx.fillStyle = '#d97706';
  ctx.fillRect(cardX + 20, cardY + 20, cardW - 40, scarfH);
  ctx.fillStyle = '#451a03';
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('★ TRIPLE B · WORLD CHAMPIONSHIP SIGNATURES ★', cardX + cardW / 2, cardY + 52);

  // Left: World Title Belt Silhouette
  ctx.fillStyle = '#b45309';
  ctx.beginPath();
  ctx.arc(cardX + 260, cardY + 380, 140, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fef3c7';
  ctx.font = '900 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('AEW WORLD', cardX + 260, cardY + 360);
  ctx.fillText('CHAMPION', cardX + 260, cardY + 400);

  // Center/Right: Inked Autograph Box
  const autoBoxX = cardX + 460;
  const autoBoxY = cardY + 180;
  const autoBoxW = 580;
  const autoBoxH = 360;

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(autoBoxX, autoBoxY, autoBoxW, autoBoxH);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 3;
  ctx.strokeRect(autoBoxX, autoBoxY, autoBoxW, autoBoxH);

  // Bold Inked Signature "MJF"
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(autoBoxX + 60, autoBoxY + autoBoxH - 80);
  ctx.lineTo(autoBoxX + 140, autoBoxY + 80);
  ctx.lineTo(autoBoxX + 220, autoBoxY + autoBoxH - 80);
  ctx.lineTo(autoBoxX + 300, autoBoxY + 80);
  ctx.lineTo(autoBoxX + 380, autoBoxY + autoBoxH - 80);
  // Loop
  ctx.arc(autoBoxX + 460, autoBoxY + 160, 60, 0, Math.PI * 2);
  ctx.stroke();

  // Name: "MAXWELL JACOB FRIEDMAN - MJF"
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('MJF', autoBoxX, cardY + cardH - 60);

  // 1/10 Low Numbered Stamp
  ctx.fillStyle = '#f59e0b';
  ctx.font = '900 34px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('01/10', cardX + cardW - 70, cardY + cardH - 60);

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond Toni Storm Squared Circle Gems #18/49 card
 * (Matches Year-Manfucturer-Card-1030.jpg uploaded by the user)
 */
export function createToniStormCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#08090c';
  ctx.fillRect(0, 0, 1200, 800);

  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Monochrome 1930s Film Noir Sepia Tone
  const filmGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  filmGrad.addColorStop(0, '#18181b');
  filmGrad.addColorStop(0.5, '#27272a');
  filmGrad.addColorStop(1, '#09090b');
  ctx.fillStyle = filmGrad;
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Film Reel Border Pattern
  ctx.strokeStyle = '#e4e4e7';
  ctx.lineWidth = 4;
  ctx.strokeRect(cardX + 20, cardY + 20, cardW - 40, cardH - 40);

  // Film perforation squares along top and bottom
  ctx.fillStyle = '#09090b';
  for (let i = 40; i < cardW - 60; i += 50) {
    ctx.fillRect(cardX + i, cardY + 26, 24, 16);
    ctx.fillRect(cardX + i, cardY + cardH - 42, 24, 16);
  }

  // Diamond Facets Center Jewel
  ctx.save();
  ctx.translate(cardX + 320, cardY + cardH / 2);
  ctx.strokeStyle = '#a1a1aa';
  ctx.lineWidth = 3;
  ctx.strokeRect(-140, -140, 280, 280);

  ctx.fillStyle = '#f4f4f5';
  ctx.font = '900 24px serif';
  ctx.textAlign = 'center';
  ctx.fillText('TIMELESS', 0, -30);
  ctx.fillText('TONI STORM', 0, 10);
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('SQUARED CIRCLE GEMS', 0, 50);
  ctx.restore();

  // Hollywood Star Portrait Silhouette
  ctx.fillStyle = '#52525b';
  ctx.beginPath();
  ctx.arc(cardX + 760, cardY + 340, 160, 0, Math.PI * 2);
  ctx.fill();

  // Pearl necklace highlight
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(cardX + 760, cardY + 410, 70, 0, Math.PI);
  ctx.stroke();

  // Header
  ctx.fillStyle = '#e4e4e7';
  ctx.font = '900 22px serif';
  ctx.textAlign = 'left';
  ctx.fillText('UPPER DECK · AEW BLACK DIAMOND', cardX + 45, cardY + 75);

  // Serial Number in Silver
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 32px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('18/49', cardX + cardW - 70, cardY + cardH - 65);

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond Will Ospreay Diamonique #05/35 card
 * (Matches Year-Manfucturer-Card-1031.jpg uploaded by the user)
 */
export function createWillOspreayCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#06100c';
  ctx.fillRect(0, 0, 1200, 800);

  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Emerald green jewel matrix
  const emeraldGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  emeraldGrad.addColorStop(0, '#022c22');
  emeraldGrad.addColorStop(0.5, '#065f46');
  emeraldGrad.addColorStop(1, '#021e17');
  ctx.fillStyle = emeraldGrad;
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Diamonique Emerald Cut Lines
  ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
  ctx.lineWidth = 2;
  for (let i = 0; i < cardW; i += 70) {
    ctx.beginPath();
    ctx.moveTo(cardX + i, cardY);
    ctx.lineTo(cardX + cardW - i, cardY + cardH);
    ctx.stroke();
  }

  // Emerald Jewel Border
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 5;
  ctx.strokeRect(cardX + 20, cardY + 20, cardW - 40, cardH - 40);

  // Title: "DIAMONIQUE"
  ctx.fillStyle = '#6ee7b7';
  ctx.font = '900 28px monospace';
  ctx.textAlign = 'left';
  ctx.fillText('BLACK DIAMOND · DIAMONIQUE EMERALD', cardX + 45, cardY + 70);

  // Aerial Assassin Figure Silhouette
  ctx.fillStyle = '#044e39';
  ctx.beginPath();
  ctx.arc(cardX + 420, cardY + 370, 160, 0, Math.PI * 2);
  ctx.fill();

  // Hidden Blade elbow pad highlight
  ctx.fillStyle = '#34d399';
  ctx.beginPath();
  ctx.arc(cardX + 480, cardY + 340, 40, 0, Math.PI * 2);
  ctx.fill();

  // Union Jack / Assassin Blade crest
  const crestX = cardX + 800;
  const crestY = cardY + 350;
  ctx.fillStyle = '#0f766e';
  ctx.beginPath();
  ctx.arc(crestX, crestY, 130, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#34d399';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('AERIAL', crestX, crestY - 15);
  ctx.fillText('ASSASSIN', crestX, crestY + 20);

  // Bottom Name: WILL OSPREAY
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 38px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('WILL OSPREAY', cardX + 45, cardY + cardH - 55);

  // Serial Number: 05/35
  ctx.fillStyle = '#34d399';
  ctx.font = '900 32px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('05/35', cardX + cardW - 70, cardY + cardH - 55);

  return canvas.toDataURL('image/png');
}

/**
 * Recreates the tested AEW Black Diamond Swerve Strickland Diamond Debut #21/99 card
 * (Matches Year-Manfucturer-Card-1032.jpg uploaded by the user)
 */
export function createSwerveStricklandCardCanvas(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#0e0b12';
  ctx.fillRect(0, 0, 1200, 800);

  const cardX = 35;
  const cardY = 30;
  const cardW = 1130;
  const cardH = 740;

  // Mogul Embassy Gold & Deep Purple
  const mogulGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  mogulGrad.addColorStop(0, '#2e1065');
  mogulGrad.addColorStop(0.5, '#4c1d95');
  mogulGrad.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = mogulGrad;
  ctx.fillRect(cardX, cardY, cardW, cardH);

  // Gold Diamond Border
  ctx.strokeStyle = '#eab308';
  ctx.lineWidth = 5;
  ctx.strokeRect(cardX + 20, cardY + 20, cardW - 40, cardH - 40);

  // Header: "DIAMOND DEBUT · WHOSE HOUSE?"
  ctx.fillStyle = '#fef08a';
  ctx.font = '900 26px monospace';
  ctx.textAlign = 'left';
  ctx.fillText('BLACK DIAMOND · DIAMOND DEBUT', cardX + 45, cardY + 70);

  // Swerve Strickland Grillz & Sunglasses Silhouette
  ctx.fillStyle = '#3b0764';
  ctx.beginPath();
  ctx.arc(cardX + 400, cardY + 360, 160, 0, Math.PI * 2);
  ctx.fill();

  // Sunglasses reflection
  ctx.fillStyle = '#eab308';
  ctx.fillRect(cardX + 340, cardY + 320, 120, 30);

  // Crown Emblem
  const crownX = cardX + 780;
  const crownY = cardY + 340;
  ctx.fillStyle = '#facc15';
  ctx.beginPath();
  ctx.moveTo(crownX - 100, crownY + 60);
  ctx.lineTo(crownX - 120, crownY - 60);
  ctx.lineTo(crownX - 50, crownY - 10);
  ctx.lineTo(crownX, crownY - 80);
  ctx.lineTo(crownX + 50, crownY - 10);
  ctx.lineTo(crownX + 120, crownY - 60);
  ctx.lineTo(crownX + 100, crownY + 60);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#1e1b4b';
  ctx.font = '900 22px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText("SWERVE'S HOUSE", crownX, crownY + 30);

  // Bottom Name: SWERVE STRICKLAND
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('SWERVE STRICKLAND', cardX + 45, cardY + cardH - 55);

  // Serial Number: 21/99
  ctx.fillStyle = '#facc15';
  ctx.font = '900 32px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('21/99', cardX + cardW - 70, cardY + cardH - 55);

  return canvas.toDataURL('image/png');
}

/**
 * Returns the exact card representations for all 8 user-tested AEW Black Diamond cards
 * (0960, 0968, 1018, 1019, 1020, 1030, 1031, 1032) with pre-calibrated quad boundaries and metadata.
 */
export function getTestedUserCards(): Array<{
  id: string;
  name: string;
  fileName: string;
  originalUrl: string;
  width: number;
  height: number;
  quad: CropQuad;
  metadata: CardMetadataTags;
}> {
  const standardQuad: CropQuad = {
    topLeft: { x: 0.031, y: 0.038 },
    topRight: { x: 0.969, y: 0.038 },
    bottomRight: { x: 0.969, y: 0.962 },
    bottomLeft: { x: 0.031, y: 0.962 }
  };

  const hikaruQuad: CropQuad = {
    topLeft: { x: 0.033, y: 0.037 },
    topRight: { x: 0.967, y: 0.037 },
    bottomRight: { x: 0.967, y: 0.963 },
    bottomLeft: { x: 0.033, y: 0.963 }
  };

  return [
    {
      id: 'tested-aew-0960-shida',
      name: 'Hikaru Shida AEW Black Diamond Event Logo Patch Auto',
      fileName: 'Year-Manfucturer-Card-0960.jpg',
      originalUrl: createHikaruShidaCardCanvas(),
      width: 1200,
      height: 800,
      quad: hikaruQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Event Logo Patches Auto',
        parallel: 'Full Gear Patch',
        player: 'Hikaru Shida',
        autographed: 'Yes',
        gradeTarget: 'Near mint or better',
        condition: 'Near mint or better',
        price: '34.99',
        notes: 'Full Gear PPV Event Logo cloth patch, on-card/sticker blue ink autograph'
      }
    },
    {
      id: 'tested-aew-0968-hart',
      name: 'Julia Hart AEW Black Diamond Squared Circle Gems 36/99',
      fileName: 'Year-Manfucturer-Card-0968.jpg',
      originalUrl: createJuliaHartCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Squared Circle Gems',
        parallel: 'Black Diamond Gems',
        player: 'Julia Hart',
        printRun: '36/99',
        autographed: 'No',
        gradeTarget: 'Raw Gem Mint (Pack Fresh)',
        condition: 'Near mint or better',
        price: '24.99',
        notes: 'Numbered 36/99 foil stamp, House of Black edition'
      }
    },
    {
      id: 'tested-aew-1018-allin',
      name: 'Darby Allin AEW Black Diamond Dual Relic 45/99',
      fileName: 'Year-Manfucturer-Card-1018.jpg',
      originalUrl: createDarbyAllinCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Dual Relics',
        parallel: 'Purple Obsidian',
        player: 'Darby Allin',
        printRun: '45/99',
        autographed: 'No',
        gradeTarget: 'Raw Near Mint-Mint',
        condition: 'Near mint or better',
        price: '29.99',
        notes: 'Dual swatch: Event-worn jersey fabric & authentic skateboard grip tape'
      }
    },
    {
      id: 'tested-aew-1019-omega',
      name: 'Kenny Omega AEW Black Diamond Gemography Ruby 15/25',
      fileName: 'Year-Manfucturer-Card-1019.jpg',
      originalUrl: createKennyOmegaCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Gemography',
        parallel: 'Ruby Diamond',
        player: 'Kenny Omega',
        printRun: '15/25',
        autographed: 'Yes',
        gradeTarget: 'Raw Gem Mint (Pack Fresh)',
        condition: 'Near mint or better',
        price: '89.99',
        notes: 'Ruby faceted parallel with certified on-card autograph'
      }
    },
    {
      id: 'tested-aew-1020-mjf',
      name: 'MJF AEW Black Diamond Championship Signatures 01/10',
      fileName: 'Year-Manfucturer-Card-1020.jpg',
      originalUrl: createMjfCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'World Championship Signatures',
        parallel: 'Gold Checkered',
        player: 'MJF',
        printRun: '01/10',
        autographed: 'Yes',
        gradeTarget: 'Raw Near Mint-Mint',
        condition: 'Near mint or better',
        price: '149.99',
        notes: 'First off the print run 01/10 Big Burberry Belt autograph'
      }
    },
    {
      id: 'tested-aew-1030-storm',
      name: 'Toni Storm AEW Black Diamond Squared Circle Gems 18/49',
      fileName: 'Year-Manfucturer-Card-1030.jpg',
      originalUrl: createToniStormCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Squared Circle Gems',
        parallel: 'Timeless Edition',
        player: 'Toni Storm',
        printRun: '18/49',
        autographed: 'No',
        gradeTarget: 'Raw Gem Mint (Pack Fresh)',
        condition: 'Near mint or better',
        price: '39.99',
        notes: 'Timeless black-and-white classic Hollywood film reel edition'
      }
    },
    {
      id: 'tested-aew-1031-ospreay',
      name: 'Will Ospreay AEW Black Diamond Diamonique Emerald 05/35',
      fileName: 'Year-Manfucturer-Card-1031.jpg',
      originalUrl: createWillOspreayCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Diamonique',
        parallel: 'Emerald Facets',
        player: 'Will Ospreay',
        printRun: '05/35',
        autographed: 'No',
        gradeTarget: 'Raw Near Mint-Mint',
        condition: 'Near mint or better',
        price: '44.99',
        notes: 'Aerial Assassin debut edition in emerald foil'
      }
    },
    {
      id: 'tested-aew-1032-swerve',
      name: 'Swerve Strickland AEW Black Diamond Diamond Debut 21/99',
      fileName: 'Year-Manfucturer-Card-1032.jpg',
      originalUrl: createSwerveStricklandCardCanvas(),
      width: 1200,
      height: 800,
      quad: standardQuad,
      metadata: {
        sport: 'Wrestling',
        league: 'AEW',
        manufacturer: 'Upper Deck',
        cardSeries: 'Upper Deck AEW Black Diamond',
        year: '2024',
        setName: 'Diamond Debut',
        parallel: "Whose House Edition",
        player: 'Swerve Strickland',
        printRun: '21/99',
        autographed: 'No',
        gradeTarget: 'Raw Gem Mint (Pack Fresh)',
        condition: 'Near mint or better',
        price: '29.99',
        notes: 'World Champion Diamond Debut Mogul Embassy foil'
      }
    }
  ];
}

export function getPresetCards(): CardItem[] {
  const defaultQuad: CropQuad = {
    topLeft: { x: 0.1125, y: 0.098 },
    topRight: { x: 0.8875, y: 0.098 },
    bottomRight: { x: 0.8875, y: 0.901 },
    bottomLeft: { x: 0.1125, y: 0.901 }
  };

  const prizmUrl = createSampleCardCanvas('raw_prizm_wwe');
  const aewUrl = createSampleCardCanvas('raw_aew_diamond');
  const vintageUrl = createSampleCardCanvas('raw_vintage_wwf');
  const nitroUrl = createSampleCardCanvas('raw_wcw_nitro');

  return [
    {
      id: 'preset-raw-prizm-wwe',
      name: '2024 Panini Prizm WWE Roman Reigns (Raw Silver Prizm)',
      originalUrl: prizmUrl,
      imageElement: null,
      width: 800,
      height: 1120,
      quad: { ...defaultQuad },
      status: 'Idle',
      isPreset: true
    },
    {
      id: 'preset-raw-aew-diamond',
      name: '2024 Upper Deck AEW Kenny Omega (Raw Relic & Auto)',
      originalUrl: aewUrl,
      imageElement: null,
      width: 800,
      height: 1120,
      quad: { ...defaultQuad },
      status: 'Idle',
      isPreset: true
    },
    {
      id: 'preset-raw-vintage-wwf',
      name: '1985 Topps WWF Hulk Hogan #1 (Raw Vintage Wax)',
      originalUrl: vintageUrl,
      imageElement: null,
      width: 800,
      height: 1120,
      quad: { ...defaultQuad },
      status: 'Idle',
      isPreset: true
    },
    {
      id: 'preset-raw-wcw-nitro',
      name: '1999 Topps WCW Nitro Sting (Raw Chromium Refractor)',
      originalUrl: nitroUrl,
      imageElement: null,
      width: 800,
      height: 1120,
      quad: { ...defaultQuad },
      status: 'Idle',
      isPreset: true
    }
  ];
}
