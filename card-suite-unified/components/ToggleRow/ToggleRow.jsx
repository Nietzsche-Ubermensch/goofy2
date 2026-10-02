import React from 'react';

/**
 * ToggleRow component — Switch rows that clearly state their consequence
 * (e.g. conservative edge preservation, scratch mask, unsharp anti-aliasing).
 */
export const ToggleRow = ({
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
    <div className={`csu-toggle-row ${className}`.trim()} {...props}>
      <div style={{ flex: 1, paddingRight: '16px' }}>
        <label htmlFor={switchId} className="csu-toggle-label" style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {label}
        </label>
        {consequence && (
          <p className="csu-toggle-consequence" style={{ margin: '2px 0 0' }}>
            {consequence}
          </p>
        )}
      </div>

      <label className="csu-switch">
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
