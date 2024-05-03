import React from 'react';
import { ParamsType } from '@typings/commonUseType';

export interface onChangeModalValueType {
  field: string;
  value: any;
  toggleModal?: boolean;
}

export interface onChangeModalParamsType {
  params: ParamsType;
  toggleModal?: boolean;
}

export type ModalCustomFunctionType<T> = {
  [key in 'backFunction' | 'confirmFunction' | 'backDropFunction']?: (
    tempParams?: T,
  ) => void;
};

export interface UseModalReturnType<T extends ParamsType = ParamsType> {
  params: T;
  setParams: React.Dispatch<React.SetStateAction<T>>;
  modalRef: React.RefObject<HTMLDialogElement>;
  onToggleModal: (
    params?: T,
    customFunctions?: ModalCustomFunctionType<T>,
  ) => Promise<T>;
  onChangeModalValue: ({
    field,
    value,
    toggleModal,
  }: onChangeModalValueType) => void;
  onChangeModalParams: ({
    params,
    toggleModal,
  }: onChangeModalParamsType) => void;
  isOpen: boolean;
  modalFunc: ModalCustomFunctionType<T>;
}
