import { AxiosError } from 'axios';
import { useQuery as useQueryOrigin } from '@tanstack/react-query';

// Typings
import { UseQueryType } from '@shared/api/reactQuery/typings/query';

/**
 * @description 사용자 정의 useQuery hook
 *
 */
export const useQuery = <TQueryFnData = unknown, TData = TQueryFnData>({
  queryKey,
  queryFn,
  options = {},
}: UseQueryType<TQueryFnData, TData>) => {
  return useQueryOrigin<TQueryFnData, AxiosError, TData>(
    queryKey,
    queryFn,
    options,
  );
};
