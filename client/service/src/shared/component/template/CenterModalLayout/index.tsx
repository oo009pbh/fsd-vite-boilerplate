import React, { useEffect } from 'react';

import { CenterModalLayoutType } from '@typings/common/template';
import { css } from '@emotion/react';
import { CenterModalLayoutWrapper } from './styles';

/**
 * @description 중앙정렬 모달 레이아웃
 * @param props
 * @param {object} props.data 해당 모달에서 사용하는 데이터들 (path: client/src/component/organisms/Modal/handlerModal.jsx)
 * @param {object} props.funcs 해당 모달을 조작하는 함수들 (path: client/src/component/organisms/Modal/handlerModal.jsx)
 * @param {String} props.className 해당 모달의 클래스 네임 지정
 * @param {String} props.css 해당 모달의 커스텀 디자인 (import { css } from "@emotion/react" 필요)
 *
 * @return {JSX.Element}
 */
function CenterModalLayout({
  modalRef,
  onToggleModal,
  customStyle = css``,
  className = '',
  backDropFunction = () => {},
  children,
}: React.PropsWithChildren<CenterModalLayoutType>) {
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target && target.nodeName === 'DIALOG') {
          onToggleModal();
        }
      });
    }
  }, []);

  useEffect(() => {
    if (modalRef.current && backDropFunction) {
      modalRef.current.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target && target.nodeName === 'DIALOG') {
          backDropFunction();
        }
      });
    }
  }, [backDropFunction]);

  return (
    <CenterModalLayoutWrapper
      className={className}
      css={customStyle}
      ref={modalRef}
    >
      {children}
    </CenterModalLayoutWrapper>
  );
}

export default CenterModalLayout;
