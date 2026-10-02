import React from 'react';

/**
 * ProgressBar component — Per-card progress, tinted by workflow state.
 * States: processing (#00ffff), complete (#ffffff), review (#ffd700), failed (#ff3333), queued (#888888).
 */
export const ProgressBar = ({
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', fontSize: '11px', fontFamily: 'var(--csu-font-mono)' }}>
          <span style={{ color: '#888888', textTransform: 'uppercase' }}>{status}</span>
          <span style={{ color: '#ededed' }}>{clampedProgress}%</span>
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
