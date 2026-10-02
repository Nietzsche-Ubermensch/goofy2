import React from 'react';

export type ProgressStatus = 'processing' | 'complete' | 'review' | 'failed' | 'queued';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
  status?: ProgressStatus;
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  status = 'processing',
  showLabel = false,
  className = '',
  ...props
}) => {
  const clampedProgress = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div className={`csu-progress-container ${className}`.trim()} {...props}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1 text-[11px] font-mono">
          <span className="text-[#888888] uppercase">{status}</span>
          <span className="text-[#ededed] font-semibold">{clampedProgress}%</span>
        </div>
      )}
      <div className="csu-progress-track">
        <div
          className={`csu-progress-bar csu-progress-bar-${status}`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
