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

export declare const ControlSlider: React.FC<ControlSliderProps>;
export default ControlSlider;
