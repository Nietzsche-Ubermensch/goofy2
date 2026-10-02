import React from 'react';

export interface PanelProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  tone?: 'default' | 'accent';
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  headerAction?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  tone = 'default',
  children,
  className = '',
  title,
  subtitle,
  headerAction,
  ...props
}) => {
  const isAccent = tone === 'accent';
  const baseClass = isAccent ? 'csu-panel-accent' : 'csu-panel';

  return (
    <section className={`${baseClass} ${className}`.trim()} {...props}>
      {(title || subtitle || headerAction) && (
        <header className="flex items-start justify-between mb-4 gap-3">
          <div>
            {title && (
              <h3 className="m-0 text-sm font-semibold text-[#ededed] tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-0.5 text-xs text-[#888888] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </header>
      )}
      {children}
    </section>
  );
};

export default Panel;
