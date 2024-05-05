import styled from '@emotion/styled';

// styles
// typings
import { Colors } from '@shared';
import { CalendarType } from './Calendar';

export const CalendarWrapper = styled.div<CalendarType>`
  background-color: ${Colors.White};
  padding: 1rem;

  & > div.calendar__header {
    margin-bottom: 2rem;
  }

  & > div.calendar__content {
    margin-bottom: 2rem;
  }

  & > button.holiday__count {
    float: right;
    cursor: pointer;
  }
`;
