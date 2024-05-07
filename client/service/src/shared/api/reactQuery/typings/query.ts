import React from 'react';
import { AxiosError } from 'axios';
import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { QueryKeyType } from '@shared/api/reactQuery/typings/queryKeys';
import { ParamsType } from '@typings/commonUseType';

export type QueryPersistGateType = {
  children: React.ReactNode;
};

/*
 * Custom useQuery의 타입
 */

// React Query의 queryFn, mutateFn 함수의 함수 호출 시그니처 정의
export interface PromiseFnType<T, V = ParamsType> {
  (variables: V, signal?: AbortSignal): Promise<T>;
}

export interface UseQueryType<TQueryFnData = unknown, TData = TQueryFnData> {
  queryKey: QueryKeyType;
  queryFn: PromiseFnType<TQueryFnData>;
  options?: UseQueryOptions<TQueryFnData, AxiosError, TData>;
}

/*
 * Custom useMutation 타입
 */
export interface UseMutateQueryType<
  TData,
  TVariables = unknown,
  TContext = unknown,
> {
  mutationFn: PromiseFnType<TData, TVariables>;
  options?: UseMutationOptions<TData, AxiosError, TVariables, TContext>;
}
