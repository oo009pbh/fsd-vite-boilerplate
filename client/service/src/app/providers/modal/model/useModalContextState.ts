import { handlerModal } from '@shared';
import { CenterModalParamsType } from '@typings/common/molecule';

const useModalContextState = () => {
  const confirmModalHandler = handlerModal<CenterModalParamsType>();
  return {
    confirmModalHandler,
  };
};

export default useModalContextState;
