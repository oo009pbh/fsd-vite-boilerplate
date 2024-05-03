import { ParamsType } from '@typings/commonUseType';
import { AxiosRequestConfig } from 'axios';

export interface ApiType {
  <TResponse>(
    path: string,
    parameters?: ParamsType,
    baseUrl?: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;
}
