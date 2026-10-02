import React from 'react';

export interface PanelProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  tone?: 'default' | 'accent';
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  headerAction?: React.ReactNode;
}

export declare const Panel: React.FC<PanelProps>;
export default Panel;
