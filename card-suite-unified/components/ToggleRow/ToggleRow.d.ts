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

export declare const ToggleRow: React.FC<ToggleRowProps>;
export default ToggleRow;
