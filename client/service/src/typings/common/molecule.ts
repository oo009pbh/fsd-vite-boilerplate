import React from 'react';

import {
  ControllerType,
  CustomStyleType,
  ParamsType,
} from '@typings/commonUseType';
import { UseModalReturnType } from '@typings/hooks/useModal';

// common/molecule/ViewTreeMenu 의 타입

export interface ViewTreeMenuApiConfig {
  path: string;
  apiParams: {
    skip: number;
    limit: number;
    sort: number;
  };
}

export interface ViewTreeMenuHeaderConfig {
  headerYn: string;
  treeLabel: string;
  sort: number[];
}

export interface ViewTreeMenuOptionConfig {
  optionLabel: string;
  width: string;
  render: (item?: any, controller?: ControllerType) => React.ReactElement;
}

export interface ViewTreeMenuConfigType {
  expandYn: string;
  addFeatureYn: string;
  removeFeatureYn: string;
  api: ViewTreeMenuApiConfig;
  header: ViewTreeMenuHeaderConfig;
  treeField: string;
  treeNo: string;
  options: ViewTreeMenuOptionConfig[];
}

export interface UseTreeMenuReturnType {
  list: ParamsType[];
  flatList: ParamsType[];
  isLoading: boolean;
  fetchDataList: (addParams?: ParamsType) => void;
  onClickTreeMenu: (field: string, item: ParamsType) => void;
  onChangeSort: () => void;
}

export interface ViewTreeMenuItemChildrenType {
  isChecked: boolean;

  [key: string | number]: any;
}

export interface ViewTreeMenuItemType {
  children?: ViewTreeMenuItemChildrenType[];
  depth?: number;

  [key: string | number]: any;
}

// common/molecule/CenterModalType 의 타입
export interface CenterModalParamsType {
  title: string;
  confirmLabel: string;
  backLabel?: string;

  [key: string]: any;
}

export interface CenterModalType extends CustomStyleType {
  handler: UseModalReturnType<CenterModalParamsType>;
}
