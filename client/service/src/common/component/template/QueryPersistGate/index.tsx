import { useIsRestoring } from '@tanstack/react-query';
import { QueryPersistGateType } from '@typings/api/reactQuery/query';

/**
 * @description [Optional] QueryPersistGate 컴포넌트(React Query의 Query 캐시 복원이 완료된 후, children을 렌더링)
 * @param children
 */
const index = ({ children }: QueryPersistGateType) => {
  const isRestoring = useIsRestoring();
  return isRestoring ? <div /> : <div>{children}</div>;
};

export default index;
