import React from 'react';

// Styles
import { css } from '@emotion/react';
import { HolidayRowType } from '@atom/HolidayRow/HolidayRow';
import { HolidayRowWrapper } from './styles';

// Components

// Typings

/**
 * @description HolidayRow 컴포넌트
 * @param {string | undefined} id
 * @param {Omit<React.PropsWithChildren<InputFormType>, "onKeyDown" | "onClick" | "onChange" | "customStyle" | "inputRef" | "onKeyPress" | "readOnly" | "type" | "onBlur" | "width" | "disabled" | "id" | "placeholder" | "value" | "maxLength">} otherProps
 * @return {JSX.Element}
 */

const index = ({
  customStyle = css``,
  className,
  size = '',
  variant = '',
  holiday = '',
  holidayName = '',
}: React.PropsWithChildren<HolidayRowType>) => {
  return (
    <HolidayRowWrapper
      className={className}
      customStyle={customStyle}
      size={size}
      variant={variant}
    >
      <div className="holiday__date">날짜: {holiday}</div>
      <div className="holiday__name">휴일명: {holidayName}</div>
    </HolidayRowWrapper>
  );
};

export default index;
