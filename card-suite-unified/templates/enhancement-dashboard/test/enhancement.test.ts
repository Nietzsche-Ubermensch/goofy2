// Vitest test runner definitions for Card Suite Unified
type ExpectFn = (actual: any) => {
  toBe: (expected: any) => void;
  toContain: (substring: string) => void;
};
declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: ExpectFn;

import { evaluateCardGate, updateCardStatus, REVIEW_GATE_THRESHOLD, EnhancementCard } from '../src/domainLogic';

describe('Enhancement Dashboard — 80% Review Gate & State Machine', () => {
  it('identifies cards with OCR confidence < 80% as needing human review', () => {
    const cardBelowGate: EnhancementCard = {
      id: 'test-card-1',
      fileName: '2024_UD_AEW_0968.jpg',
      sourceUrl: 'blob:test',
      status: 'queued',
      progress: 0,
      width: 1200,
      height: 800,
      metrics: {
        ocrConfidence: 74, // Below 80%
        metadataScore: 90,
        blemishCount: 1
      },
      metadata: {
        player: 'Julia Hart',
        series: 'Black Diamond'
      }
    };

    const gate = evaluateCardGate(cardBelowGate);
    expect(gate.needsReview).toBe(true);
    expect(gate.reasons[0]).toContain(`below the ${REVIEW_GATE_THRESHOLD}% review gate`);
  });

  it('allows cards with OCR confidence >= 80% to auto-pass', () => {
    const cardPassing: EnhancementCard = {
      id: 'test-card-2',
      fileName: '2024_UD_AEW_0960.jpg',
      sourceUrl: 'blob:test',
      status: 'queued',
      progress: 0,
      width: 1200,
      height: 800,
      metrics: {
        ocrConfidence: 95, // Above 80%
        metadataScore: 92,
        blemishCount: 0
      },
      metadata: {
        player: 'Hikaru Shida',
        series: 'Black Diamond'
      }
    };

    const gate = evaluateCardGate(cardPassing);
    expect(gate.needsReview).toBe(false);
    expect(gate.reasons.length).toBe(0);
  });

  it('transitions workflow status and preserves or updates progress', () => {
    const card: EnhancementCard = {
      id: 'test-card-3',
      fileName: '2024_UD_AEW_1018.jpg',
      sourceUrl: 'blob:test',
      status: 'queued',
      progress: 0,
      width: 1200,
      height: 800,
      metrics: { ocrConfidence: 88, metadataScore: 90, blemishCount: 0 },
      metadata: { player: 'Darby Allin' }
    };

    const processingCard = updateCardStatus(card, 'processing', 45);
    expect(processingCard.status).toBe('processing');
    expect(processingCard.progress).toBe(45);

    const completedCard = updateCardStatus(processingCard, 'complete', 100);
    expect(completedCard.status).toBe('complete');
    expect(completedCard.progress).toBe(100);
  });
});
