import React from 'react';
import { SerializedStyles } from '@emotion/react';

// common/molecule/CheckboxUnique 의 타입
export interface CenterModalLayoutType {
  modalRef: React.RefObject<HTMLDialogElement>;
  onToggleModal: () => void;
  backDropFunction?: () => void;
  customStyle?: SerializedStyles;
  className?: string;
}
