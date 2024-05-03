import DateLocale from 'date-fns/locale';
import { ConfigType, ManipulateType } from 'dayjs';

export type DateLocaleType = typeof DateLocale;

export type DateValueType = ConfigType;

export type DateUnitType = ManipulateType;

export type WeekDayType = {
  date: ConfigType;
  day: string;
  dayOfWeek: string;
};
