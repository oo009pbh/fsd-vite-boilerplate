import { SerializedStyles } from '@emotion/react';
import React from 'react';

export interface CalendarCellType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  variant?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;

  round: 'all' | 'left' | 'right' | 'not';
}
