import styled from '@emotion/styled';

// styles
// typings
import { Colors } from '@globalStyles';
import { CalendarContentType } from './CalendarContent';

export const CalendarContentWrapper = styled.div<CalendarContentType>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 1rem;

  background-color: ${Colors.White};
`;
