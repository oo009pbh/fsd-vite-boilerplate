import React from 'react';

// Styles
import { css } from '@emotion/react';
import { CalendarInputType } from './CalendarInput';
import { InputWrapper } from './styles';

// Components

// Typings

/**
 * @description CalendarInput 컴포넌트
 * @param {string | undefined} id
 * @param {React.RefObject<HTMLInputElement> | undefined} inputRef
 * @param {boolean | undefined} readOnly
 * @param {boolean | undefined} disabled
 * @param {string | undefined} placeholder
 * @param {any} value
 * @param {string | undefined} type
 * @param {number | undefined} maxLength
 * @param {((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined} onKeyPress
 * @param {((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined} onKeyDown
 * @param {((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined} onChange
 * @param {((event: React.FocusEvent<HTMLInputElement>) => void) | undefined} onBlur
 * @param {((event: React.MouseEvent<HTMLInputElement>) => void) | undefined} onClick
 * @param {SerializedStyles | undefined} customStyle
 * @param {Omit<React.PropsWithChildren<InputFormType>, "onKeyDown" | "onClick" | "onChange" | "customStyle" | "inputRef" | "onKeyPress" | "readOnly" | "type" | "onBlur" | "width" | "disabled" | "id" | "placeholder" | "value" | "maxLength">} otherProps
 * @return {JSX.Element}
 */

const index = ({
  inputRef,
  readOnly = false,
  disabled = false,
  placeholder = '',
  value = '',
  type = 'text',
  maxLength = 255,
  onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {},
  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {},
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {},
  onClick = (event: React.MouseEvent<HTMLInputElement>) => {},
  onInput = (event: React.ChangeEvent<HTMLInputElement>) => {},
  onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {},

  customStyle = css``,
  className,
  variant = '',
  autoComplete = 'off',
}: React.PropsWithChildren<CalendarInputType>) => {
  return (
    <InputWrapper
      className={className}
      customStyle={customStyle}
      variant={variant}
      type={type}
      ref={inputRef}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      maxLength={maxLength}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      onInput={onInput}
      onPaste={onPaste}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};

export default index;
