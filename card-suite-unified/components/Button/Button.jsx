import React from 'react';

/**
 * Button component — primary / secondary / ghost / danger, md + sm sizes.
 * Primary: Amber #ffb000 with black text.
 * Small: 28px height, ideal for in-row retry, remove, download.
 */
export const Button = ({
  variant = 'secondary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const variantClass = `csu-btn-${variant}`;
  const sizeClass = `csu-btn-${size}`;

  return (
    <button
      type={type}
      className={`csu-btn ${variantClass} ${sizeClass} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
