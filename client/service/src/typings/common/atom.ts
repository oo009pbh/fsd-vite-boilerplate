import React from 'react';
import { SerializedStyles } from '@emotion/react';

export interface IconDetailType {
  type?: string;
  src: string;
}

// common/atom/Button 의 타입
export interface ButtonType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  prevIcon?: IconDetailType;
  icon?: IconDetailType;
  variant?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
