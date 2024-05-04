import React from 'react';

// typings
// styles
import CalendarHeader from '@molecule/CalendarHeader';
import { CalendarContent } from '@molecule';
import { useDateContext } from '@context/date';
import { useSystemContext } from '@context/system';
import Button from '@atom/Button';
import { CalendarWrapper } from './styles';
import { CalendarType } from './Calendar';

/**
 *
 * @description 캘린더
 * @param className
 * @param customStyle
 * @constructor
 */
function Calendar({ className = '' }: React.PropsWithChildren<CalendarType>) {
  const { isShowHoliday, setIsShowHoliday } = useSystemContext();

  const {
    currentMonth,
    allDaysByMonth,
    startDate,
    endDate,
    selectedDate,
    moveToMonth,
    setStartDate,
    setEndDate,
    setSelectedDate,
    selectedHoliday,
  } = useDateContext();

  return (
    <CalendarWrapper className={className}>
      <CalendarHeader
        className="calendar__header"
        currentMonth={currentMonth}
        startDate={startDate}
        endDate={endDate}
        moveToMonth={moveToMonth}
        setSelectedDate={setSelectedDate}
      />
      <CalendarContent
        className="calendar__content"
        startDate={startDate}
        endDate={endDate}
        currentMonth={currentMonth}
        dayList={
          currentMonth in allDaysByMonth ? allDaysByMonth[currentMonth] : []
        }
        setFocusedDate={
          selectedDate === 'startDate' ? setStartDate : setEndDate
        }
      />
      {selectedHoliday.length > 0 && (
        <Button
          className="holiday__count"
          label={`공휴일 ${selectedHoliday.length} 개의 정보 보기`}
          onClick={() => {
            setIsShowHoliday((prevBoolean) => !prevBoolean);
          }}
        />
      )}
    </CalendarWrapper>
  );
}

export default Calendar;
