import React from 'react';

export interface MetricMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  gateThreshold?: number;
  showValue?: boolean;
  className?: string;
}

export declare const MetricMeter: React.FC<MetricMeterProps>;
export default MetricMeter;
