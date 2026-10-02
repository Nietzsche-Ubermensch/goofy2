/**
 * Enhancement Dashboard — Domain Logic
 * Handles card queue state machine, OCR confidence arbitration against the 80% gate,
 * and batch audit aggregation.
 */

export interface EnhancementCard {
  id: string;
  fileName: string;
  sourceUrl: string;
  enhancedUrl?: string;
  status: 'queued' | 'processing' | 'complete' | 'review-needed' | 'failed';
  progress: number;
  width: number;
  height: number;
  metrics: {
    ocrConfidence: number;
    metadataScore: number;
    blemishCount: number;
  };
  metadata: {
    player?: string;
    series?: string;
    serial?: string;
    year?: string;
    autographed?: boolean | string;
  };
  auditDecision?: 'approved' | 'rejected' | 'manual-edit';
}

export const REVIEW_GATE_THRESHOLD = 80;

/**
 * Evaluates whether a card requires human operator review.
 */
export function evaluateCardGate(card: EnhancementCard): {
  needsReview: boolean;
  reasons: string[];
} {
  const reasons: string[] = [];

  if (card.metrics.ocrConfidence < REVIEW_GATE_THRESHOLD) {
    reasons.push(`OCR confidence (${card.metrics.ocrConfidence}%) is below the ${REVIEW_GATE_THRESHOLD}% review gate.`);
  }

  if (card.metrics.metadataScore < REVIEW_GATE_THRESHOLD) {
    reasons.push(`Metadata quality score (${card.metrics.metadataScore}%) is below minimum threshold.`);
  }

  if (!card.metadata.player || card.metadata.player.trim() === '') {
    reasons.push('Player / Athlete name could not be reliably extracted.');
  }

  return {
    needsReview: reasons.length > 0,
    reasons
  };
}

/**
 * Transitions card workflow state.
 */
export function updateCardStatus(
  card: EnhancementCard,
  newStatus: EnhancementCard['status'],
  progress?: number
): EnhancementCard {
  return {
    ...card,
    status: newStatus,
    progress: progress !== undefined ? progress : card.progress
  };
}
