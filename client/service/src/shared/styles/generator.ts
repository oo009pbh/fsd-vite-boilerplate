import { css } from '@emotion/react';

export const flexCssGenerator = (
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
) => css`
  display: ${display};
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
`;

export const fontGenerator = (
  fontSize = '1.2rem',
  fontWeight = 'normal', // 400
  lineHeight = 'normal', // 1
  letterSpacing = '0rem',
  fontStyle = 'normal',
) => css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  font-style: ${fontStyle};
`;

export const textEllipsisGenerator = (line = 1) =>
  line === 1
    ? css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `
    : css`
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;

        display: -webkit-box;
        -webkit-line-clamp: ${line};
        -webkit-box-orient: vertical;
      `;
