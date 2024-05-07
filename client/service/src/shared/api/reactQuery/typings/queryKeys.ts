/*
 *  QueryKey의 타입
 */
import { ParamsType } from '@typings/commonUseType';

export type QueryKeyType =
  // QueryKey값만 있는 경우
  | [string]
  // QueryKey값과 api parameters 가 같이 key로 있는 경우
  | [string, ParamsType];

export type VariablesQueryKeyType = {
  queryKey: QueryKeyType;
  [key: string]: any;
};
