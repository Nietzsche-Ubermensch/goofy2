import React from 'react';

/**
 * Panel component — The surface every dashboard region sits on.
 * tone="accent" for regions needing an active decision or immediate review.
 */
export const Panel = ({
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
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', gap: '12px' }}>
          <div>
            {title && (
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#ededed', letterSpacing: '-0.01em' }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#888888', lineHeight: 1.4 }}>
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
