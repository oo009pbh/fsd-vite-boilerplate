import styled from '@emotion/styled';
import { css } from '@emotion/react';

// styles
import { Colors, flexCssGenerator, fontGenerator } from '@globalStyles';

// typings
import { CssVariantType } from '@typings/commonUseType';
import { CalendarCellType } from './CalendarCell';

export const CalendarCellStyles: CssVariantType<CalendarCellType> = {
  default: (props) => css`
    ${flexCssGenerator('inline-flex', 'center', 'center')};
    ${fontGenerator('1.3rem', '500', 'normal', '-0.0065rem')}
    cursor: pointer;
    border: none;
    transition:
      background 0.2s ease-in-out,
      color 0.2s ease-in-out;
    font-size: 1.6rem;
    background: ${Colors.White};

    user-select: none;
    border-radius: 100rem;

    &:hover {
      background: ${Colors.Blue400};
      color: ${Colors.White};
    }

    &:active {
      background: ${Colors.Blue350};
      color: ${Colors.White};
    }

    ${props?.disabled &&
    css`
      background: ${Colors.Gray02};
      pointer-events: none;
    `};

    ${props?.round === 'right' &&
    css`
      border-bottom-left-radius: unset;
      border-top-left-radius: unset;
    `};
    ${props?.round === 'left' &&
    css`
      border-bottom-right-radius: unset;
      border-top-right-radius: unset;
    `};
    ${props?.round === 'not' &&
    css`
      border-radius: unset;
    `}
  `,
  selected: () => css`
    background: ${Colors.Blue350};
    color: ${Colors.White};
  `,
};
export const CalendarCellSizes: CssVariantType<CalendarCellType> = {
  default: () => css`
    width: 7rem;
    height: 7rem;
    padding: 1rem;
  `,
  large: () => css`
    width: 5.2rem;
    height: 5.2rem;
    padding: 1.2rem;
  `,
  medium: () => css`
    width: 3.8rem;
    height: 3.8rem;
    padding: 0.7rem;
  `,
};

export const CalendarCellWrapper = styled.div<CalendarCellType>`
  ${(props) =>
    typeof CalendarCellStyles.default === 'function' &&
    CalendarCellStyles.default(props)};

  ${(props) =>
    typeof CalendarCellSizes.default === 'function' &&
    CalendarCellSizes.default(props)};

  ${(props) =>
    props.variant &&
    typeof CalendarCellStyles[props.variant] === 'function' &&
    CalendarCellStyles[props.variant](props)}

  ${(props) =>
    props.size &&
    typeof CalendarCellSizes[props.size] === 'function' &&
    CalendarCellSizes[props.size](props)}


  ${(props) => props.customStyle}
`;
