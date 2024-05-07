import { AxiosError } from 'axios';
import { useMutation as useMutationOrigin } from '@tanstack/react-query';

// Typings
import { UseMutateQueryType } from '@shared/api/reactQuery/typings/query';

/**
 * @description React Query의 useMutation의 사용자 정의 hook
 */

export const useMutation = <
  TData = unknown,
  TVariables = void,
  TContext = unknown,
>({
  mutationFn,
  options,
}: UseMutateQueryType<TData, TVariables, TContext>) => {
  return useMutationOrigin<TData, AxiosError, TVariables, TContext>(
    mutationFn,
    { ...options },
  );
};
