import { SerializedStyles } from '@emotion/react';

export interface HolidayRowType {
  className?: string;
  customStyle?: SerializedStyles;
  variant?: string;
  size?: string;
  holiday?: string;
  holidayName?: string;
}
