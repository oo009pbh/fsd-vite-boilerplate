import styled from '@emotion/styled';
import { CssVariantType } from '@typings/commonUseType';
import { css } from '@emotion/react';
import { HolidayRowType } from '@atom/HolidayRow/HolidayRow';
import { Colors } from '@shared';

export const HolidayRowSizes: CssVariantType = {
  default: () => css`
    width: 100%;
    padding: 1rem;
    height: 3.8rem;
  `,
};

export const HolidayRowStyles: CssVariantType = {
  default: () => css`
    display: flex;
    justify-content: space-between;

    border: 0.1rem solid ${Colors.Black};

    background-color: ${Colors.White};

    line-height: 1.8rem;
    font-size: 1.8rem;
  `,
};

export const HolidayRowWrapper = styled.div<HolidayRowType>`
  ${(props) =>
    typeof HolidayRowStyles.default === 'function' &&
    HolidayRowStyles.default(props)};

  ${(props) =>
    typeof HolidayRowSizes.default === 'function' &&
    HolidayRowSizes.default(props)};

  ${(props) =>
    props.variant &&
    typeof HolidayRowStyles[props.variant] === 'function' &&
    HolidayRowStyles[props.variant](props)}

  ${(props) =>
    props.size &&
    typeof HolidayRowSizes[props.size] === 'function' &&
    HolidayRowSizes[props.size](props)}


  ${(props) => props.customStyle}
`;
