import React, { useId, useRef } from 'react';

// Component
import CenterModalLayout from '@template/CenterModalLayout';
import Button from '@atom/Button';

// Styles
import { CenterModalType } from '@typings/common/molecule';
import { CenterModalWrapper } from './styles';

// typings

/**
 * @description 중앙정렬 모달
 * @param {UseModalReturnType} handler 해당 모달에서 사용하는 핸들러(path: client/src/component/organisms/Modal/handlerModal.jsx)
 * @param {() => void} buttonClick 버튼 클릭시 실행되는 함수 미입력시 모달 닫기
 * @param {string | undefined} label 버튼 안 텍스트

 * @returns {JSX.Element}
 */
function CenterModal({
  handler,
  children,
}: React.PropsWithChildren<CenterModalType>) {
  const { onToggleModal, params, modalRef, modalFunc, onChangeModalValue } =
    handler;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // height 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  return (
    <CenterModalLayout
      key={useId()}
      modalRef={modalRef}
      onToggleModal={onToggleModal}
      backDropFunction={modalFunc.backDropFunction}
    >
      <CenterModalWrapper variant={params?.variant} size={params?.size}>
        <div className="center__modal--top">
          <div className="center__modal--title">{params.title}</div>
          <div
            className="center__modal--notice"
            dangerouslySetInnerHTML={{ __html: params.description }}
          />
        </div>
        <div className="center__modal--textarea">
          <textarea
            ref={textareaRef}
            value={params[params.inputField]}
            onChange={(e) => {
              onChangeModalValue({
                field: params.inputField,
                value: e.target.value,
              });
            }}
            onInput={() => {
              handleResizeHeight();
            }}
          />
        </div>
        <div className="center__modal--bottom ">
          {params.backLabel && (
            <Button
              className="center__modal--back round"
              label={params.backLabel}
              variant="blueOutlined"
              size="roundedModal"
              onClick={() => {
                onToggleModal().then((modalParams) => {
                  if (modalFunc.backFunction) {
                    modalFunc.backFunction(modalParams);
                  }
                });
              }}
            />
          )}
          <Button
            className="center__modal--confirm round"
            label={params.confirmLabel}
            variant="primary"
            size="roundedModal"
            onClick={(event) => {
              onToggleModal().then((modalParams) => {
                if (modalFunc.confirmFunction) {
                  modalFunc.confirmFunction(modalParams);
                }
              });
            }}
          />
        </div>
      </CenterModalWrapper>
    </CenterModalLayout>
  );
}

export default CenterModal;
