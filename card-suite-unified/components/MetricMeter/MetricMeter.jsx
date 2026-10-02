import React from 'react';

/**
 * MetricMeter component — OCR confidence and metadata quality reward,
 * with the 80% review gate tick clearly rendered.
 * If value < 80%, fill is tinted gold/amber indicating human review required.
 * If value >= 80%, fill is solid white/green indicating auto-pass.
 */
export const MetricMeter = ({
  value = 0,
  label = 'OCR Confidence',
  gateThreshold = 80,
  showValue = true,
  className = '',
  ...props
}) => {
  const clampedValue = Math.max(0, Math.min(100, Math.round(value)));
  const isPassing = clampedValue >= gateThreshold;

  // Visual fill color
  const fillColor = isPassing ? '#ffffff' : '#ffd700';

  return (
    <div className={`csu-meter-container ${className}`.trim()} {...props}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '12px' }}>
        <span style={{ color: '#ededed', fontWeight: 500 }}>{label}</span>
        {showValue && (
          <span className="csu-metric-value" style={{ color: fillColor, fontSize: '13px', fontWeight: 600 }}>
            {clampedValue}%
            <span style={{ fontSize: '10px', color: isPassing ? '#888' : '#ffd700', marginLeft: '6px' }}>
              {isPassing ? '(PASS)' : '(REVIEW)'}
            </span>
          </span>
        )}
      </div>

      <div style={{ marginTop: '14px', position: 'relative' }}>
        <div className="csu-meter-track">
          <div
            className="csu-meter-fill"
            style={{ width: `${clampedValue}%`, backgroundColor: fillColor }}
          />
          {/* 80% Review Gate Tick */}
          <div
            className="csu-meter-gate"
            style={{ left: `${gateThreshold}%` }}
            title={`Review Gate Threshold (${gateThreshold}%)`}
          />
          <span
            className="csu-meter-gate-label"
            style={{ left: `${gateThreshold}%` }}
          >
            {gateThreshold}% GATE
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricMeter;
