import { css } from '@emotion/react';

export const globalStyle = css`
  * {
    font-family:
      'Noto Sans',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.02rem;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-size: 62.5%;
  }

  /* pages index css START  */

  #root-container__main {
    height: 100%;
    width: 100%;
  }

  /* width */

  ::-webkit-scrollbar {
    height: 1rem;
    width: 0.7rem;
  }

  /* Track */

  #root::-webkit-scrollbar-track {
    border-radius: 9999px;
    border-width: 1px;
  }

  ::-webkit-scrollbar-track {
    background: #f8f8fa;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #e7e7eb;
    border-radius: 0.5rem;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: #e7e7eb;
  }

  .ReactQueryDevtoolsPanel * {
    color: White;
  }

  :root {
    --gradient-background: #f7efec;
  }
`;
