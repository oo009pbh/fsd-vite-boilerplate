import { handlerModal } from '@hooks/useModal';
import { CenterModalParamsType } from '@typings/common/molecule';

const useGlobalModalContextState = () => {
  const confirmModalHandler = handlerModal<CenterModalParamsType>();
  return {
    confirmModalHandler,
  };
};

export default useGlobalModalContextState;
