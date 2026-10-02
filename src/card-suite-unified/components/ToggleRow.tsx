import React from 'react';

export interface ToggleRowProps {
  label: string;
  consequence?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const ToggleRow: React.FC<ToggleRowProps> = ({
  label,
  consequence,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  id,
  ...props
}) => {
  const switchId = id || `csu-toggle-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`csu-toggle-row flex items-start justify-between gap-4 py-3 border-b border-[#222222] ${className}`.trim()} {...props}>
      <div className="flex-1 pr-4">
        <label
          htmlFor={switchId}
          className="csu-toggle-label text-[13px] font-medium text-[#ededed] block"
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          {label}
        </label>
        {consequence && (
          <p className="csu-toggle-consequence text-[11px] text-[#888888] mt-0.5 leading-relaxed m-0">
            {consequence}
          </p>
        )}
      </div>

      <label className="csu-switch shrink-0">
        <input
          id={switchId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="csu-switch-slider" />
      </label>
    </div>
  );
};

export default ToggleRow;
