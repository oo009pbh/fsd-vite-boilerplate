import styled from '@emotion/styled';

// styles
// typings
import { Colors } from '@shared';
import { CalendarHeaderType } from './CalendarHeader';

export const CalendarHeaderWrapper = styled.div<CalendarHeaderType>`
  background-color: ${Colors.White};

  & > div.calendar__date--select {
    margin-bottom: 2rem;

    & > input.calendar__input {
      margin-right: 2rem;
    }
  }

  & > div.calendar__month--select {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div.calendar__month {
      font-size: 2rem;
    }

    & > span.common-icon {
      cursor: pointer;
    }
  }
`;
