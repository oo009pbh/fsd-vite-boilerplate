import { UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ParamsType } from '@typings/commonUseType';

// Server Response가 boolean 값인 경우
export interface SuccessDto {
  success: boolean;
}

export interface CustomUseQueryHookType<TData, TVariables = ParamsType> {
  (props: TVariables): UseQueryResult<TData, AxiosError>;
}

// Server Response type
export interface ServerResponseDto<T> {
  data: T;
  success: boolean;
  timestamp: Date;
}
