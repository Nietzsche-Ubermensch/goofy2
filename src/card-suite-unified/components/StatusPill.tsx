import React from 'react';

export type CardStatus = 'queued' | 'processing' | 'complete' | 'review-needed' | 'failed';

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: CardStatus;
  label?: string;
  showDot?: boolean;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  status = 'queued',
  label,
  showDot = true,
  className = '',
  ...props
}) => {
  const statusLabels: Record<CardStatus, string> = {
    'queued': 'QUEUED',
    'processing': 'PROCESSING',
    'complete': 'COMPLETE',
    'review-needed': 'REVIEW NEEDED',
    'failed': 'FAILED'
  };

  const statusColors: Record<CardStatus, string> = {
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
