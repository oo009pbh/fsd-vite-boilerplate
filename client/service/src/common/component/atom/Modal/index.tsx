import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import { css } from '@emotion/react';
import { Colors, Icons } from '@shared';
import { ModalType } from '@typings/common/atom';
import { ModalContent, ModalOverlay } from './styles';

// Components
import Icon from '../Icon';
import Button from '../Button';

// Typings

/**
 * @param {React.ReactNode} children
 * @param {boolean} isShowing
 * @param {(() => void) | undefined} hide
 * @param {string | undefined} title
 * @param {any} content
 * @param {ButtonType | undefined} cancel
 * @param {ButtonType | undefined} subAction
 * @param {ButtonType | undefined} confirm
 * @param {string} customStyle
 * @returns {React.ReactPortal | null}
 */
const index = ({
  children,
  isShowing = false,
  hide = () => {},
  title = '',
  content,
  cancel,
  subAction,
  confirm,
  customStyle = css``,
}: React.PropsWithChildren<ModalType>) => {
  if (isShowing) {
    return ReactDOM.createPortal(
      <>
        <ModalOverlay onClick={hide} />
        <ModalContent
          customStyle={customStyle}
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <h4 className="modal-content__title">{title}</h4>
          <div className="modal-content__cancel" onClick={hide}>
            <Icon icon={Icons.close} size="1.8rem" color={Colors.Gray50} />
          </div>
          {content && <span className="modal-content__content">{content}</span>}
          {children}
          <div className="modal-content__button-container">
            {cancel && (
              <Button
                label={cancel.label}
                variant="blueOutlined"
                customStyle={css`
                  margin-right: 1rem;
                  ${cancel.customStyle}
                `}
                onClick={cancel.onClick}
              />
            )}
            {subAction && (
              <Button
                label={subAction.label}
                variant="blackOutlined"
                customStyle={css`
                  margin-right: 1rem;
                  ${subAction.customStyle}
                `}
                onClick={subAction.onClick}
              />
            )}
            {confirm && (
              <Button
                label={confirm.label}
                onClick={confirm.onClick}
                customStyle={css`
                  ${confirm.customStyle}
                `}
              />
            )}
          </div>
        </ModalContent>
      </>,
      document.body,
    );
  }
  return null;
};

export default index;
