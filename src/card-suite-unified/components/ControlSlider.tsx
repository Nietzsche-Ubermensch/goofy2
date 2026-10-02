import React from 'react';

export interface ControlSliderProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  hint?: string;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export const ControlSlider: React.FC<ControlSliderProps> = ({
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
      <div className="csu-slider-label-row flex justify-between items-center text-xs">
        <label className="font-medium text-[#ededed]">{label}</label>
        <span className="csu-metric-value text-[#ffb000] font-semibold text-xs font-mono">
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
        className="csu-slider-input w-full cursor-pointer"
      />

      {hint && <p className="csu-slider-hint text-[11px] text-[#888888] m-0 leading-tight">{hint}</p>}
    </div>
  );
};

export default ControlSlider;
