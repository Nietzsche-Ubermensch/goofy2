import { Router } from 'express';
import { evaluateCardGate, EnhancementCard } from '../src/domainLogic';

export const enhancementRouter = Router();

// In-memory queue storage for template demonstration
const dashboardQueue = new Map<string, EnhancementCard>();

/**
 * POST /api/csu/cards — Submit card to enhancement dashboard queue
 */
enhancementRouter.post('/cards', (req, res) => {
  const { fileName, sourceUrl, width, height, metadata } = req.body;

  if (!fileName || !sourceUrl) {
    return res.status(400).json({ error: 'fileName and sourceUrl are required.' });
  }

  const id = `csu_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const initialCard: EnhancementCard = {
    id,
    fileName,
    sourceUrl,
    status: 'queued',
    progress: 0,
    width: width || 1200,
    height: height || 800,
    metrics: {
      ocrConfidence: Math.floor(Math.random() * 30) + 70, // 70-100%
      metadataScore: 85,
      blemishCount: 2
    },
    metadata: metadata || {}
  };

  const gateResult = evaluateCardGate(initialCard);
  if (gateResult.needsReview) {
    initialCard.status = 'review-needed';
  }

  dashboardQueue.set(id, initialCard);
  return res.status(201).json(initialCard);
});

/**
 * GET /api/csu/cards — List all dashboard queue cards
 */
enhancementRouter.get('/cards', (req, res) => {
  return res.json({ cards: Array.from(dashboardQueue.values()) });
});

/**
 * POST /api/csu/cards/:id/arbitrate — Record operator audit decision
 */
enhancementRouter.post('/cards/:id/arbitrate', (req, res) => {
  const card = dashboardQueue.get(req.params.id);
  if (!card) {
    return res.status(404).json({ error: 'Card not found in queue.' });
  }

  const { decision, editedMetadata } = req.body;
  card.auditDecision = decision;
  if (editedMetadata) {
    card.metadata = { ...card.metadata, ...editedMetadata };
    card.metrics.ocrConfidence = 100;
  }
  card.status = decision === 'rejected' ? 'failed' : 'complete';

  dashboardQueue.set(card.id, card);
  return res.json({ success: true, card });
});
