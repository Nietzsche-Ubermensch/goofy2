import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'md' | 'sm';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
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
      {icon && <span className="inline-flex items-center shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
