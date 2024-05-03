import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import {
  ModalCustomFunctionType,
  onChangeModalParamsType,
  onChangeModalValueType,
  UseModalReturnType,
} from '@typings/hooks/useModal';
import { ParamsType } from '@typings/commonUseType';

/**
 * @description modal을 조작하는 핸들러, 모달에서 사용하는 data와 function을 반환합니다.
 * @description params = 모달 내에서 사용하는 data state
 * @description isOpen = 모달 노출 여부 (true: 노출, false: 안보이는 상태)
 * @description onToggleModal = 실행시 모달 노출여부가 변경
 * @description onChangeModalValue = params에 data 필드 하나를 변경하는 함수.
 * @description onChangeModalParams = params에 data 여러개를 변경하는 함수.
 *
 * @param {((params: ParamsType) => void) | undefined} initParams - params를 초기화 해주는 함수
 * @returns {{
 *    onChangeModalValue: ({field, value, toggleModal}: onChangeModalValueType) => void,
 *    onChangeModalParams: ({params, toggleModal}: onChangeModalParamsType) => void,
 *    modalRef: React.MutableRefObject<HTMLDialogElement>,
 *    params: ParamsType,
 *    onToggleModal: () => void,
 *    setParams: (value: (((prevState: ParamsType) => ParamsType) | ParamsType)) => void
 * }}
 */
export const handlerModal = <T extends ParamsType = ParamsType>(
  initParams: T = {} as T,
): UseModalReturnType<T> => {
  const [params, setParams] = useState<T>({} as T);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalFunc, setModalFunc] = useState<ModalCustomFunctionType<T>>({});
  const onToggleModal = useCallback(
    async (
      tempParams: T = {} as T,
      customFunctions: ModalCustomFunctionType<T> = {},
    ) => {
      const currentParams = JSON.parse(JSON.stringify(params));
      if (modalRef?.current) {
        setIsOpen(!modalRef?.current?.open);
        if (modalRef?.current?.open) {
          setParams(initParams);
          modalRef.current.close();
          setModalFunc({});
        } else {
          setParams(tempParams);
          modalRef.current.showModal();
          setModalFunc(customFunctions);
        }
      } else {
        console.log('모달의 핸들러 설정이 잘못 되었습니다.');
      }
      return Promise.resolve(currentParams);
    },
    [isOpen, params],
  );

  const onChangeModalValue = useCallback(
    ({ field, value, toggleModal = false }: onChangeModalValueType) => {
      setParams((prevState) => ({ ...prevState, [field]: value }));
      if (toggleModal) onToggleModal().then();
    },
    [],
  );

  const onChangeModalParams = useCallback(
    ({ params, toggleModal = false }: onChangeModalParamsType) => {
      setParams((prevState) => ({ ...prevState, ...params }));
      if (toggleModal) onToggleModal().then();
    },
    [],
  );

  useLayoutEffect(() => {
    setParams(initParams);
  }, []);

  return {
    params,
    setParams,
    modalRef,
    onToggleModal,
    onChangeModalValue,
    onChangeModalParams,
    isOpen,
    modalFunc,
  };
};
