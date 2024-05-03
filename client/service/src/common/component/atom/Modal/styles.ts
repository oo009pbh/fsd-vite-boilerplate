import styled from '@emotion/styled';
import { ModalStyleType } from '@typings/common/atom';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000;
  opacity: 0.5;
`;

export const ModalContent = styled.div<ModalStyleType>`
  min-width: 60rem;
  height: fit-content;
  //height: 100%;
  position: fixed;
  top: calc((var(--vh, 1vh) * 100) - 50%);
  left: calc(100vw - 50%);
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 2.4rem 1.6rem;
  outline: 0;
  background-color: white;
  z-index: 1050;

  @media all and (max-width: 120rem) {
    min-width: calc(100% - 20rem);
  }

  & > .modal-content__title {
    font-weight: 500;
  }

  & > .modal-content__cancel {
    position: absolute;
    top: 2rem;
    right: 1.6rem;
    cursor: pointer;
  }

  & > .modal-content__content {
  }

  & > .modal-content__button-container {
    display: flex;
    justify-content: center;
  }

  ${(props) => props.customStyle}
`;
