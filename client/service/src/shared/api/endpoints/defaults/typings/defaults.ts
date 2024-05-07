import { ParamsType } from '@typings/commonUseType';
import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios/index';

export interface TableListParamsType<
  TQueryFnData = unknown,
  TData = TQueryFnData,
> {
  name: string;
  apiUrl: string;
  apiParams?: ParamsType;
  options?: UseQueryOptions<TQueryFnData, AxiosError, TData>;
}

export type ApiParamsType = Pick<TableListParamsType, 'apiUrl' | 'apiParams'>;

export type DefaultListParamsType<T extends ParamsType = ParamsType> = T & {
  skip?: number;
  limit?: number;
  sortColumn?: string;
  sortDirection?: string;
  [key: string]: any;
};
export interface ListType {
  [key: string]: any;
}

export interface ListDto<T = ListType> {
  list: T[];
  count: number;
}
