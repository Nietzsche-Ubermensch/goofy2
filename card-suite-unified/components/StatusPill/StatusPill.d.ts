import React from 'react';

export type CardStatus = 'queued' | 'processing' | 'complete' | 'review-needed' | 'failed';

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: CardStatus;
  label?: string;
  showDot?: boolean;
  className?: string;
}

export declare const StatusPill: React.FC<StatusPillProps>;
export default StatusPill;
