import React, {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from 'react';
import { SerializedStyles } from '@emotion/react';

export interface CalendarInputType {
  className?: string;
  customStyle?: SerializedStyles;
  variant?: string;
  size?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  value?:
    | string
    | (string & readonly string[])
    | (number & readonly string[])
    | number;
  type?: string & HTMLInputTypeAttribute;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  autoComplete?: string & HTMLInputAutoCompleteAttribute;
}
