import { DateType } from '@typings/commonUseType';
import React from 'react';

export interface CalendarContentType {
  className?: string;
  currentMonth: string;
  startDate: string;
  endDate: string;
  dayList: DateType[];

  setFocusedDate: React.Dispatch<React.SetStateAction<string>>;
}
