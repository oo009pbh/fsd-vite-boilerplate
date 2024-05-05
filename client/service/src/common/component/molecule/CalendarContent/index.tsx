import React from 'react';

// typings
import { CalendarCell } from '@atom';
import { DateUtil } from '@util';
import { css } from '@emotion/react';
import { Colors } from '@shared';
import { CalendarContentType } from './CalendarContent';

// styles
import { CalendarContentWrapper } from './styles';

/**
 *
 * @description 캘린더 CELL
 * @param className
 * @param customStyle
 * @param label
 * @param icon
 * @param variant
 * @param size
 * @param onClick
 * @param children
 * @constructor
 */
function CalendarContent({
  className = '',
  startDate,
  endDate,

  dayList,
  setFocusedDate,
}: React.PropsWithChildren<CalendarContentType>) {
  return (
    <CalendarContentWrapper className={className}>
      {dayList.map((dayItem) => {
        const round =
          dayItem.date === startDate
            ? 'left'
            : dayItem.date === endDate
              ? 'right'
              : 'not';

        const selected =
          (startDate &&
            endDate &&
            DateUtil.isBetween(dayItem.date, startDate, endDate)) ||
          dayItem.date === startDate ||
          dayItem.date === endDate
            ? 'selected'
            : '';

        return (
          <CalendarCell
            key={`calendar__cell--${dayItem.date}`}
            variant={selected}
            label={dayItem.day}
            round={round}
            onClick={() => {
              setFocusedDate(dayItem.date);
            }}
            customStyle={
              dayItem?.holidayName
                ? css`
                    color: ${Colors.Error};
                  `
                : css``
            }
          />
        );
      })}
    </CalendarContentWrapper>
  );
}

export default CalendarContent;
