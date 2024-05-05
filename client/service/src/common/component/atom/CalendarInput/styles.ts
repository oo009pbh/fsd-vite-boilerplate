import styled from '@emotion/styled';
import { Colors } from '@shared';
import { CssVariantType } from '@typings/commonUseType';
import { css } from '@emotion/react';
import { CalendarInputType } from './CalendarInput';

export const CalendarInputSizes: CssVariantType = {
  default: () => css`
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: 15rem;
    height: 5.2rem;
    padding: 1.6rem;
  `,
};

export const CalendarInputStyles: CssVariantType = {
  default: () => css`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;

    border: none;
    border-radius: 0.6rem;
    color: ${Colors.BlueGray500};
    background-color: ${Colors.Gray02};
    cursor: pointer;

    &:focus {
      outline: none;
      border: solid 0.1rem ${Colors.Blue300};
      box-shadow: 0 0 0 0.2rem rgba(33, 160, 254, 0.25);
    }

    &::placeholder {
      color: ${Colors.Gray40};
    }

    &:disabled {
      color: ${Colors.Gray40};
      background-color: ${Colors.Gray60};
    }
  `,
};

export const InputWrapper = styled.input<CalendarInputType>`
  ${(props) =>
    typeof CalendarInputStyles.default === 'function' &&
    CalendarInputStyles.default(props)};

  ${(props) =>
    typeof CalendarInputSizes.default === 'function' &&
    CalendarInputSizes.default(props)};

  ${(props) =>
    props.variant &&
    typeof CalendarInputStyles[props.variant] === 'function' &&
    CalendarInputStyles[props.variant](props)}

  ${(props) =>
    props.size &&
    typeof CalendarInputSizes[props.size] === 'function' &&
    CalendarInputSizes[props.size](props)}


  ${(props) => props.customStyle}
`;
