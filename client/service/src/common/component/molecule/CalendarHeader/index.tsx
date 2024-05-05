import React from 'react';

// typings
import { CalendarInput, Icon } from '@atom';
import { Colors, Icons } from '@shared';
import { css } from '@emotion/react';
import { CalendarHeaderType } from './CalendarHeader';

// styles
import { CalendarHeaderWrapper } from './styles';

/**
 *
 * @description 캘린더 Header
 * @param className
 * @param customStyle
 * @constructor
 */
function CalendarHeader({
  currentMonth = '',
  startDate,
  endDate,
  className = '',
  moveToMonth,
  setSelectedDate,
}: React.PropsWithChildren<CalendarHeaderType>) {
  return (
    <CalendarHeaderWrapper className={className}>
      <div className="calendar__date--select">
        <CalendarInput
          className="calendar__input"
          placeholder="시작일 선택"
          value={startDate}
          onClick={() => {
            if (setSelectedDate) {
              setSelectedDate('startDate');
            }
          }}
          readOnly
        />
        <CalendarInput
          className="calendar__input"
          placeholder="종료일 선택"
          value={endDate}
          onClick={() => {
            if (setSelectedDate) {
              setSelectedDate('endDate');
            }
          }}
          disabled={!startDate}
          readOnly
        />
      </div>
      <div className="calendar__month--select">
        <Icon
          icon={Icons.navigationBefore}
          size="3.2rem"
          customStyle={
            currentMonth === '2024-01'
              ? css`
                  pointer-events: none;
                  color: ${Colors.Gray60};
                `
              : css``
          }
          onClick={() => {
            if (currentMonth && typeof moveToMonth === 'function') {
              moveToMonth(currentMonth, 'prev');
            }
          }}
        />
        <div className="calendar__month">{currentMonth}</div>
        <Icon
          icon={Icons.navigationNext}
          size="3.2rem"
          customStyle={
            currentMonth === '2025-12'
              ? css`
                  pointer-events: none;
                  color: ${Colors.Gray60};
                `
              : css``
          }
          onClick={() => {
            if (currentMonth && typeof moveToMonth === 'function') {
              moveToMonth(currentMonth, 'next');
            }
          }}
        />
      </div>
    </CalendarHeaderWrapper>
  );
}

export default CalendarHeader;
