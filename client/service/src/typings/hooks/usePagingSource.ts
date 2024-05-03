import { ParamsType } from '@typings/commonUseType';

export interface PagingSourceReturnType<T extends ParamsType, S> {
  total: number;
  listCount: number;
  canLoadMore: boolean;
  prevKey?: S;
  currentKey: S;
  nextKey?: S;
  pagingList: T[];
  error?: ParamsType;
  loadList: (key: S) => void;
  loadNext: () => void;
  loadPrevious: () => void;
  reset: () => void;
}

export interface PagingLoadDataType<T extends ParamsType, S> {
  prevKey?: S;
  nextKey?: S;
  list: T[];
}

export interface PagingLoadResultType<T extends ParamsType, S> {
  page?: PagingLoadDataType<T, S>;
  error: ParamsType;
}
