import React from 'react';

// Component
import CenterModal from '@molecule/CenterModal';
import { useGlobalModal } from '@context/modal';

// Context
function GlobalModal() {
  const { confirmModalHandler } = useGlobalModal();

  return (
    <>{confirmModalHandler && <CenterModal handler={confirmModalHandler} />}</>
  );
}

export default GlobalModal;
