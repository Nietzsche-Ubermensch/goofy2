import React from 'react';

export interface MetricMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  gateThreshold?: number;
  showValue?: boolean;
  className?: string;
}

export const MetricMeter: React.FC<MetricMeterProps> = ({
  value = 0,
  label = 'OCR Confidence',
  gateThreshold = 80,
  showValue = true,
  className = '',
  ...props
}) => {
  const clampedValue = Math.max(0, Math.min(100, Math.round(value)));
  const isPassing = clampedValue >= gateThreshold;
  const fillColor = isPassing ? '#ffffff' : '#ffd700';

  return (
    <div className={`csu-meter-container ${className}`.trim()} {...props}>
      <div className="flex justify-between items-baseline text-xs">
        <span className="text-[#ededed] font-medium">{label}</span>
        {showValue && (
          <span className="csu-metric-value text-[13px] font-semibold font-mono" style={{ color: fillColor }}>
            {clampedValue}%
            <span
              className="text-[10px] ml-1.5 font-sans uppercase font-bold"
              style={{ color: isPassing ? '#888888' : '#ffd700' }}
            >
              {isPassing ? 'PASS' : 'REVIEW'}
            </span>
          </span>
        )}
      </div>

      <div className="mt-3.5 relative">
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
            className="csu-meter-gate-label font-mono"
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
