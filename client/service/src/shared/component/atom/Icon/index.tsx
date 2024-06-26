import React, { MouseEvent } from 'react';

// typing
import { IconType } from '@typings/common/atom';

// Style
import { Colors, Images } from '@shared';
import { css } from '@emotion/react';

/**
 * @description 구글 머티리얼 아이콘을 기반 아이콘을 표현하는 atom 컴포넌트
 *
 * @param {IconDetailType} icon  어떠한 아이콘을 표시해야할지 정의하는 icon 객체
 * @param {string | undefined} size 아이콘 크기 default 크기는 1rem
 * @param {string | undefined} color 아이콘 색깔 default 색깔은 Black
 * @param {string | undefined} className 커스텀 className 지정
 * @param {CssArchiveType | undefined} style 인라인 스타일링
 * @param {SerializedStyles | undefined} customStyle className 명 혹은 emotion/react 로 커스텀 스타일링 지정
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined} onClick 아이콘의 onClick 이벤트
 * @returns {JSX.Element}
 */
function Icon({
  icon,
  size = '2.4rem',
  color = Colors.Black,
  className = '',
  style = {},
  customStyle = css``,
  onClick = (e: MouseEvent<HTMLSpanElement>) => {},
}: React.PropsWithChildren<IconType>) {
  const materialIconStyle = css`
    width: ${size};
    font-size: ${size};
    color: ${color};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${customStyle};
  `;
  const customIconStyle = css`
    height: ${size};
    width: ${size};
    color: ${color};

    & > img {
      height: ${size};
      width: ${size};
      color: ${color};
    }

    ${customStyle};
  `;

  return (
    <span
      className={`common-icon ${icon?.type || 'material-icons'} ${className}`}
      css={icon?.type === 'custom' ? customIconStyle : materialIconStyle}
      style={{ ...style }}
      onClick={onClick}
    >
      {icon?.type === 'custom' ? (
        <img alt={`${icon.src}Icon`} src={Images[icon.src]} />
      ) : (
        icon?.src
      )}
    </span>
  );
}

export default Icon;
