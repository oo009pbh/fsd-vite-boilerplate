import { ParsedQuery, ParseOptions } from 'query-string/base';
import { ParamsType } from '@typings/commonUseType';

export interface QueryStringParsingType {
  (search?: string, options?: ParseOptions): ParsedQuery;
}

export interface QueryParamsParsingType {
  (tempParams: ParamsType, options?: ParseOptions, except?: string[]): string;
}
