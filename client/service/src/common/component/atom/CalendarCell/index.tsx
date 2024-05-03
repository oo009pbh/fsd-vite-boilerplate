import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';

// typings
import { CalendarCellType } from './CalendarCell';

// styles
import { CalendarCellWrapper } from './styles';

/**
 * @description 캘린더 CELL
 * @param className
 * @param customStyle
 * @param label
 * @param variant
 * @param size
 * @param onClick
 * @param children
 * @constructor
 */
function CalendarCell({
  className = '',
  customStyle = css``,
  label = '',
  variant = '',
  size = '',
  onClick = (e: MouseEvent<HTMLDivElement>) => {},
  round,
  children,
  disabled,
}: React.PropsWithChildren<CalendarCellType>) {
  return (
    <CalendarCellWrapper
      className={className}
      customStyle={customStyle}
      variant={variant}
      size={size}
      onClick={onClick}
      round={round}
      disabled={disabled}
    >
      {label}
      {children}
    </CalendarCellWrapper>
  );
}

export default CalendarCell;
