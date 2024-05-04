import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { DateUtil } from '@util';
import { useGetHolidays } from '@api/endpoints/holiday/useGetHolidays';
import { DateArrayType, ParamsType } from '@typings/commonUseType';
import { useSystemContext } from '@context/system';

const useGlobalDateContextState = () => {
  const { data: holidays } = useGetHolidays();

  const now = dayjs();
  const today = now.startOf('day');
  // 날짜 선택 시작일
  const [startDate, setStartDate] = useState<string>('');
  // 날짜 선택 종료일
  const [endDate, setEndDate] = useState<string>('');
  // 현재 선택된 달
  const [currentMonth, setCurrentMonth] = useState<string>('2024-04');
  const [allDaysByMonth, setAllDaysByMonth] = useState<DateArrayType>(
    DateUtil.generateDatesBetweenYears(2024, 2025),
  );
  const [selectedHoliday, setSelectedHoliday] = useState<string[][]>([]);
  const [selectedDate, setSelectedDate] = useState<'startDate' | 'endDate'>(
    'startDate',
  );
  const { isShowHoliday, setIsShowHoliday } = useSystemContext();

  const holidayData = holidays
    ? holidays.reduce((prev, cur) => {
        return Object.assign(prev, {
          [cur.date]: cur.localName,
        });
      }, {} as ParamsType)
    : {};

  const moveToMonth = (currentMonth: string, move: 'next' | 'prev') => {
    const tempMonth = dayjs(currentMonth);
    let nextMonth;

    if (move === 'next') {
      nextMonth = tempMonth.add(1, 'month');
    } else {
      nextMonth = tempMonth.subtract(1, 'month');
    }

    setCurrentMonth(nextMonth.format('YYYY-MM'));
  };

  useEffect(() => {
    if (holidays) {
      const result: DateArrayType = {};

      let currentDate = dayjs(`2024-01-01`);
      const endDate = dayjs(`2025-12-31`);

      while (
        currentDate.isBefore(endDate) ||
        currentDate.isSame(endDate, 'day')
      ) {
        const monthKey = currentDate.format('YYYY-MM'); // '2024-01', '2024-02', ...
        if (!result[monthKey]) {
          result[monthKey] = [];
          // 달의 첫 날짜 구하기
          let firstDayOfMonth = currentDate.startOf('month');
          // 월요일로 맞추기 위해 필요한 이전 날짜 추가
          while (firstDayOfMonth.day() !== 1) {
            // dayjs에서 .day()는 일요일을 0으로 시작하는 요일을 반환
            firstDayOfMonth = firstDayOfMonth.subtract(1, 'day');
            result[monthKey].unshift({
              date: firstDayOfMonth.format('YYYY-MM-DD'),
              dayOfWeek: firstDayOfMonth.format('dddd'),
              day: firstDayOfMonth.format('D'),
            });
          }
        }

        const currentDay = currentDate.format('YYYY-MM-DD');
        const dayOfWeek = currentDate.format('dddd');
        const day = currentDate.format('D');

        if (currentDay in holidayData) {
          result[monthKey].push({
            date: currentDate.format('YYYY-MM-DD'), // '2024-01-01', '2024-01-02', ...
            holidayName: holidayData[currentDay],
            dayOfWeek,
            day,
          });
        } else {
          result[monthKey].push({
            date: currentDate.format('YYYY-MM-DD'), // '2024-01-01', '2024-01-02', ...
            dayOfWeek,
            day,
          });
        }
        // 달의 마지막 날짜 처리
        if (currentDate.endOf('month').format('YYYY-MM-DD') === currentDay) {
          let lastDayOfMonth = currentDate;
          // 일요일로 맞추기 위해 필요한 다음 날짜 추가
          while (lastDayOfMonth.day() !== 0) {
            lastDayOfMonth = lastDayOfMonth.add(1, 'day');
            result[monthKey].push({
              date: lastDayOfMonth.format('YYYY-MM-DD'),
              dayOfWeek: lastDayOfMonth.format('dddd'),
              day: lastDayOfMonth.format('D'),
            });
          }
        }
        // 다음 날짜로 이동
        currentDate = currentDate.add(1, 'day');
      }

      setAllDaysByMonth(result);
    }
  }, [holidays]);

  useEffect(() => {
    if (startDate && endDate) {
      setSelectedHoliday(
        Object.entries(holidayData).filter(([day, _]) => {
          return DateUtil.isBetween(day, startDate, endDate);
        }),
      );
    } else if (startDate) {
      setSelectedHoliday(
        Object.entries(holidayData).filter(([day, _]) => {
          return startDate === day;
        }),
      );
    } else if (endDate) {
      setSelectedHoliday(
        Object.entries(holidayData).filter(([day, _]) => {
          return endDate === day;
        }),
      );
    } else {
      setSelectedHoliday([]);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate) {
      setSelectedDate('endDate');
    }

    if (endDate && dayjs(startDate) > dayjs(endDate)) {
      setEndDate('');
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate && dayjs(startDate) > dayjs(endDate)) {
      setStartDate('');
      setSelectedDate('startDate');
    }
  }, [endDate]);

  useEffect(() => {
    if (selectedHoliday.length === 0) {
      setIsShowHoliday(false);
    }
  }, [selectedHoliday]);

  return {
    today,
    allDaysByMonth,
    selectedHoliday,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    currentMonth,
    setCurrentMonth,
    moveToMonth,
    selectedDate,
    setSelectedDate,
  };
};

export default useGlobalDateContextState;
