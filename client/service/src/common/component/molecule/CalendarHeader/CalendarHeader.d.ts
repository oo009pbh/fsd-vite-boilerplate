import React from 'react';

export interface CalendarHeaderType {
  currentMonth?: string;
  className?: string;
  startDate?: string;
  endDate?: string;
  moveToMonth?: (currentMonth: string, move: 'next' | 'prev') => void;
  setSelectedDate?: React.Dispatch<
    React.SetStateAction<'startDate' | 'endDate'>
  >;
}
