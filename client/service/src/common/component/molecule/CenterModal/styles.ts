import styled from '@emotion/styled';
// styles
import { Colors, flexCssGenerator, fontGenerator } from '@globalStyles';
import { css } from '@emotion/react';
import { CssVariantType, CustomStyleType } from '@typings/commonUseType';

export const CenterModalStyles: CssVariantType<CustomStyleType> = {
  default: (props) => css`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 37rem;
    gap: ${props.variant === 'input' ? '2.5rem' : '2rem'};

    & > div.center__modal--top {
      & > div.center__modal--title {
        ${fontGenerator('2rem', '500', 'normal', '-0.0202rem', 'normal')}
        color: ${Colors.BlueGray500};
        margin-bottom: 1rem;
      }

      & > div.center__modal--notice {
        display: ${!!props.variant ? 'none' : 'block'};
        font-family: 'Poppins', sans-serif;
        ${fontGenerator('1.4rem', '400', 'normal')}
        white-space: pre-line;
        ${fontGenerator('1.4rem', '400')};
        color: ${Colors.BlueGray300};
        min-height: 4.2rem;

        &::-webkit-scrollbar-thumb {
          background: ${Colors.Gray60};
          width: 0.4rem;
          height: 10rem;
          border-radius: 0.2rem;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: ${Colors.Gray70};
        }
      }
    }

    & > div.center__modal--textarea {
      display: ${props.variant === 'input' ? 'block' : 'none'};
      margin-bottom: 2rem;

      & > textarea {
        width: 100%;
        resize: none;
        border-radius: 0.9rem;
        border: 1px solid ${Colors.Blue300};
        background: rgba(255, 255, 255, 0.8);
        outline: none;
        padding: 0.4rem 0.8rem 0.4rem 1.6rem;

        /* searchbar_mainpage */
        box-shadow:
          0 0 1rem 0 rgba(41, 111, 168, 0.1),
          0 0 0 0.3rem rgba(82, 177, 250, 0.2);

        ::-webkit-scrollbar {
          height: 0;
          width: 0;
        }
      }
    }

    & > div.center__modal--description {
      ${flexCssGenerator()}
      ${fontGenerator('1.3rem', '400', 'normal', '-0.0065rem')}
        margin-bottom: 1.5rem;
    }
  `,
};
export const CenterModalSizes: CssVariantType<CustomStyleType> = {
  default: () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 25.6rem;
    max-width: 37rem;
    padding: 2.4rem;
    background-color: ${Colors.White};

    & > div.center__modal--top {
      & > div.center__modal--title {
        line-height: 3rem;
        margin-bottom: 1rem;

        & > span.common-icon {
          margin-right: 0.5rem;
        }
      }
    }

    & > div.center__modal--bottom {
      ${flexCssGenerator('flex', 'flex-end')};
      gap: 0.4rem;
    }
  `,
  buttonRow: () => css`
    max-width: 47.2rem;

    & > div.center__modal--bottom {
      gap: 2rem;

      & > button {
        width: 19.4rem;
        padding: 0 1.9rem;
      }
    }
  `,
  buttonColumn: () => css`
    & > div.center__modal--bottom {
      ${flexCssGenerator('flex', 'center', 'center', 'column')}
      gap: 1rem;

      & > button {
        width: 25.5rem;
      }
    }
  `,
};

export const CenterModalWrapper = styled.div<CustomStyleType>`
  ${(props) =>
    typeof CenterModalStyles.default === 'function' &&
    CenterModalStyles.default(props)}
  ${(props) =>
    typeof CenterModalSizes.default === 'function' &&
    CenterModalSizes.default(props)}

  ${(props) =>
    props.variant &&
    typeof CenterModalStyles[props.variant] === 'function' &&
    CenterModalStyles[props.variant](props)}

  ${(props) =>
    props.size &&
    typeof CenterModalSizes[props.size] === 'function' &&
    CenterModalSizes[props.size](props)}
`;
