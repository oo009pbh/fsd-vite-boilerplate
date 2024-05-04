import React from 'react';

// Component
import CenterModal from '@molecule/CenterModal';
import { useModalContext } from '@context/modal';

// Context
function GlobalModal() {
  const { confirmModalHandler } = useModalContext();

  return (
    <>{confirmModalHandler && <CenterModal handler={confirmModalHandler} />}</>
  );
}

export default GlobalModal;
