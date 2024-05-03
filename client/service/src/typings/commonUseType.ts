import { SerializedStyles } from '@emotion/react';
import React from 'react';

export interface ParamsType extends Record<string | number, any> {}

export interface CssArchiveType
  extends Record<string, string | SerializedStyles> {}

export interface CssVariantType<T = ParamsType>
  extends Record<string, (props: T) => SerializedStyles> {
  default?: (props: T) => SerializedStyles;
}

export interface ControllerType
  extends Record<
    string | number,
    (args: any, e?: React.MouseEvent<HTMLElement>) => any
  > {}

export type CustomStyleType = {
  customStyle?: SerializedStyles;
  className?: string;
  variant?: string;
  size?: string;
  isChecked?: boolean;
  isOpen?: boolean;
  isTossFooter?: boolean;
};

export interface OnChangeValueType {
  (field: string, value: any): void;
}

export type DateType = {
  date: string;
  holidayName?: string;
  dayOfWeek?: string;
  day?: string;
};

export type DateArrayType = Record<string, Array<DateType>>;
