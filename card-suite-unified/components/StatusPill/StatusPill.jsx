import React from 'react';

/**
 * StatusPill component — queued, processing, complete, review-needed, failed.
 * Uses JetBrains Mono for status tokens and subtle dot indicators.
 */
export const StatusPill = ({
  status = 'queued',
  label,
  showDot = true,
  className = '',
  ...props
}) => {
  const statusLabels = {
    'queued': 'QUEUED',
    'processing': 'PROCESSING',
    'complete': 'COMPLETE',
    'review-needed': 'REVIEW NEEDED',
    'failed': 'FAILED'
  };

  const statusColors = {
    'queued': '#888888',
    'processing': '#00ffff',
    'complete': '#ffffff',
    'review-needed': '#ffd700',
    'failed': '#ff3333'
  };

  const displayLabel = label || statusLabels[status] || status.toUpperCase();
  const dotColor = statusColors[status] || '#888888';

  return (
    <span
      className={`csu-status-pill csu-status-pill-${status} ${className}`.trim()}
      {...props}
    >
      {showDot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            display: 'inline-block',
            boxShadow: status === 'processing' ? '0 0 6px rgba(0, 255, 255, 0.6)' : undefined
          }}
        />
      )}
      <span>{displayLabel}</span>
    </span>
  );
};

export default StatusPill;
