import React from 'react';

/**
 * ControlSlider component — Scale, denoise, sharpen, contrast —
 * each paired with a plain-language hint and mono formatted value.
 */
export const ControlSlider = ({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '%',
  hint,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`csu-slider-group ${className}`.trim()} {...props}>
      <div className="csu-slider-label-row">
        <label style={{ fontWeight: 500, color: '#ededed' }}>{label}</label>
        <span className="csu-metric-value" style={{ color: '#ffb000', fontWeight: 600, fontSize: '12px' }}>
          {value}{unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="csu-slider-input"
      />

      {hint && <p className="csu-slider-hint" style={{ margin: 0 }}>{hint}</p>}
    </div>
  );
};

export default ControlSlider;
