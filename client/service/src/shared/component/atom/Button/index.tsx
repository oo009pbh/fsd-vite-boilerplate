import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';

import { ButtonType } from '@typings/common/atom';
import { ButtonContent } from './styles';
import Icon from '../Icon';

// typings

/**
 * @description 버튼
 * @param {string | undefined} className
 * @param {SerializedStyles | undefined} customStyle
 * @param {string | undefined} label
 * @param {IconDetailType | undefined} icon
 * @param {string | undefined} variant
 * @param {string | undefined} size
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined} onClick
 * @returns {JSX.Element}
 */

function Button({
  className = '',
  customStyle = css``,
  label = '',
  icon,
  prevIcon,
  variant = 'primary',
  size = 'medium',
  onClick = (e: MouseEvent<HTMLButtonElement>) => {},
  disabled = false,
  children,
}: React.PropsWithChildren<ButtonType>) {
  return (
    <ButtonContent
      className={className}
      customStyle={customStyle}
      variant={variant}
      size={size}
      onClick={onClick}
      icon={icon}
      prevIcon={prevIcon}
      disabled={disabled}
    >
      {prevIcon && (
        <Icon
          icon={prevIcon}
          size="2.4rem"
          color="inherit"
          customStyle={css`
            margin-right: 0.6rem;
          `}
        />
      )}
      {label}
      {icon && (
        <Icon
          icon={icon}
          size="2.4rem"
          color="inherit"
          customStyle={css`
            margin-left: 0.8rem;
          `}
        />
      )}
      {children}
    </ButtonContent>
  );
}

export default Button;
