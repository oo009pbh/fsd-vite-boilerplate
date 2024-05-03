import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// typings
import { ButtonType } from '@typings/common/atom';
import { Colors, fontGenerator } from '@globalStyles';
import { CssVariantType } from '@typings/commonUseType';

const animateButton = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;
export const ButtonStyles: CssVariantType<ButtonType> = {
  default: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition:
      background 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    outline: none;

    &:disabled {
      opacity: 0.38;
      pointer-events: none;
    }
  `,
  primary: () => css`
    background: ${Colors.Blue300};

    ${fontGenerator('1.3rem', '500', 'normal', '-0.0065rem')}
    color: ${Colors.White};

    &:hover {
      background: ${Colors.Blue350};
      box-shadow: 0 0 0 0.3rem rgba(33, 160, 254, 0.25);
    }

    &:active {
      background: ${Colors.Blue400};
      box-shadow: none;
    }
  `,
  gradient: () => css`
    background: linear-gradient(96deg, #7de0ff -31.88%, #0994ff 122.72%);

    ${fontGenerator('1.6rem', '500', 'normal')}
    color: ${Colors.White};

    &:hover {
      background: linear-gradient(94deg, #13b4e6 -2.92%, #2679f6 107.58%);
      box-shadow: 0 0 0 0.3rem rgba(33, 160, 254, 0.25);
    }

    &:active {
      background: linear-gradient(94deg, #13b4e6 -2.92%, #2679f6 107.58%);
      box-shadow: none;
    }
  `,
  secondary: () => css`
    background: ${Colors.BlueGray500};

    ${fontGenerator('1.3rem', '500', 'normal', '-0.0065rem')}
    color: ${Colors.White};

    &:hover {
      background: ${Colors.Gray80};
      box-shadow: 0 0 0 0.3rem rgba(33, 160, 254, 0.25);
    }

    &:active {
      background: ${Colors.Gray60};
      box-shadow: none;
    }
  `,
  blackOutlined: (props) => css`
    background: ${Colors.White};

    ${fontGenerator('1.3rem', '400', 'normal', '-0.0065rem')}
    border: 0.1rem solid ${Colors.BlackLayer50};
    color: ${Colors.Blue300};

    &:hover {
      background: ${Colors.Blue25};
      box-shadow: 0 0 0 0.3rem rgba(33, 160, 254, 0.25);
    }

    &:active {
      background: ${Colors.Blue25};
      box-shadow: none;
    }
  `,
  blueOutlined: (props) => css`
    background: ${Colors.White};

    ${fontGenerator('1.3rem', '400', 'normal', '-0.0065rem')}
    border: 0.1rem solid ${Colors.Blue300};
    color: ${Colors.Blue300};

    &:hover {
      background: ${Colors.Blue25};
      box-shadow: 0 0 0 0.3rem rgba(33, 160, 254, 0.25);
    }

    &:active {
      background: ${Colors.Blue25};
      box-shadow: none;
    }
  `,
  vanilla: (props) => css`
    background: ${Colors.White};

    ${fontGenerator('1.3rem', '400', '2.4rem', '-0.0065rem')}
    color: ${Colors.Black};
  `,
  vanillaBlue: (props) => css`
    background: ${Colors.Gray02};

    ${fontGenerator('1.3rem', '400', '2.4rem', '-0.0065rem')}
    color: ${Colors.Blue200};
  `,
  animation: (props) => css`
    color: rgba(255, 255, 255, 0.9);
    background: linear-gradient(-45deg, #27ffa5, #21a0fe, #e969cd, #ff6464);
    background-size: 600%;
    animation: ${animateButton} 16s linear infinite;
    position: relative;

    &:after {
      content: ' ';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 1rem;
      z-index: -1;
      filter: blur(30px);
      background: linear-gradient(-45deg, #27ffa5, #21a0fe, #e969cd, #ff6464);
      background-size: 600%;
      animation: ${animateButton} 16s linear infinite;
    }
  `,
  aboutBottomAnimation: (props) => css`
    color: ${Colors.Black};
    font-size: 1.6rem;
    font-weight: 500;
    background: linear-gradient(-45deg, #ffafa4, #b7d2ff, #ac81fb, #fe7fbc);
    background-size: 600%;
    animation: ${animateButton} 16s linear infinite;
    position: relative;

    &:after {
      content: ' ';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 1rem;
      z-index: -1;
      filter: blur(30px);
      background: linear-gradient(-45deg, #ffafa4, #b7d2ff, #ac81fb, #fe7fbc);
      background-size: 600%;
      animation: ${animateButton} 16s linear infinite;
    }
  `,
};
export const ButtonSizes: CssVariantType<ButtonType> = {
  large: () => css`
    border-radius: 1rem;
    height: 5.2rem;
    padding: 0.9rem 3rem;
  `,
  roundedLarge: () => css`
    border-radius: 10rem;
    height: 5.2rem;
    padding: 0.9rem 3rem;
  `,
  medium: () => css`
    border-radius: 0.4rem;
    height: 3.8rem;
    padding: 0.9rem 1.8rem;
  `,
  roundedMedium: (props) => css`
    border-radius: 10rem;
    height: 3.8rem;
    padding: 0.95rem 1.7rem 0.95rem 1.7rem;
  `,
  rounded: (props) => css`
    border-radius: 100rem;
    width: 3.8rem;
    height: 3.8rem;
    padding: 0.7rem;

    & > span.common-icon {
      margin: 0;
    }

    &:hover {
      box-shadow: none;
    }
  `,
  small: (props) => css`
    height: 2.4rem;

    & > span.common-icon {
      margin-right: 0.6rem;
    }
  `,
  roundedModal: (props) => css`
    border-radius: 10rem;
    height: 4rem;
    padding: 1rem 2.8rem 1rem 2.8rem;
  `,
};

export const ButtonContent = styled.button<ButtonType>`
  ${(props) =>
    typeof ButtonStyles.default === 'function' && ButtonStyles.default(props)}

  ${(props) =>
    props.variant &&
    typeof ButtonStyles[props.variant] === 'function' &&
    ButtonStyles[props.variant](props)}

  ${(props) =>
    props.size &&
    typeof ButtonSizes[props.size] === 'function' &&
    ButtonSizes[props.size](props)}


  ${(props) => props.customStyle}
`;
