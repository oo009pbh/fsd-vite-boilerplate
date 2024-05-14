import React from 'react';

// Component
import CenterModal from '@molecule/CenterModal';
// todo: fsd 아키텍처와도 충돌하는 부분, 수정 필요
// 애초에 이런 contextFactory 자체가 fsd와 충돌하는것 같음
// eslint-disable-next-line import/no-cycle
import { useModalContext } from '@app/providers';

// Context
function Modal() {
  const { confirmModalHandler } = useModalContext();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{confirmModalHandler && <CenterModal handler={confirmModalHandler} />}</>
  );
}

export default Modal;
