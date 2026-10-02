import React from 'react';

export type ProgressStatus = 'processing' | 'complete' | 'review' | 'failed' | 'queued';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
  status?: ProgressStatus;
  showLabel?: boolean;
  className?: string;
}

export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
