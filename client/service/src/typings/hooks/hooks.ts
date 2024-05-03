import { ParamsType } from '@typings/commonUseType';
import React from 'react';
import { ViewManageConfigType } from '@typings/common/molecule';

// service/src/hooks/useClickOutside
export interface UseClickOutsideType {
  targetRef: React.RefObject<HTMLElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// service/src/hooks/useCheckEssential
export interface CheckConfigType {
  template: ParamsType[];
}

export interface UseCheckEssentialType {
  (params: ParamsType, config: CheckConfigType[]): boolean;
}

export interface UseUserInfoEssentialType {
  (params: ParamsType, config: ViewManageConfigType): boolean;
}

// service/src/hooks/useSlidingViewUrl
export interface UseSlidingViewUrlReturnType {
  detailNo: string | undefined;
  depth: string;
  setDepth: React.Dispatch<React.SetStateAction<string>>;
}

export interface UseSlidingViewUrlType {
  (
    initialDepth?: string,
    initialDetailNo?: string,
  ): UseSlidingViewUrlReturnType;
}

export interface UseSlidingViewUrlPropsType {
  initialDepth?: string;
  initialDetailNo?: string;
}

// service/src/hooks/useViewOpen
export interface OnClickViewOpenType {
  (item: ParamsType): void;
}

export interface OnChangeValueType {
  (
    field?: string,
    value?: any,
    p?: ParamsType,
    onCustomSetState?: React.Dispatch<React.SetStateAction<ParamsType>>,
  ): void;
}

export interface UseViewOpenReturnType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  detail: ParamsType;
  onClickViewOpen: OnClickViewOpenType;
  onChangeValue: OnChangeValueType;
}

export interface UseViewOpenType {
  (pathName?: string, queries?: string[]): UseViewOpenReturnType;
}

export interface UseFileToImageReturnType {
  parsedFileUrls: string[];
  selectedFiles: (string | File)[];
  onChangeFileUrls: (selectedFiles: File[]) => void;
}
export interface UseFileToImageType {
  (initFileUrls?: (string | File)[]): UseFileToImageReturnType;
}

// export interface UseMapBoxReturnType {
//   onSelectAndMoveCamera: (e: mapboxgl.MapLayerMouseEvent) => void;
//   initMapLoad: (e: mapboxgl.MapboxEvent) => void;
//   mapRef: React.RefObject<MapRef>;
//   onMouseLeave: (e: mapboxgl.MapLayerMouseEvent) => void;
//   onMouseMove: (e: mapboxgl.MapLayerMouseEvent) => void;
//   onMoveCamera: (longitude: number, latitude: number, zoom: number) => void;
//   initialViewState: ParamsType;
// }
export interface UseMapBoxType {
  continent: string;
  onChange: (params: ParamsType) => void;
  country?: string;
  city?: string;
}

export interface UseLikeParamType {
  articleNo?: number;
  commentNo?: number;
  festivalNo?: number;
}

export interface UseHandleLikeClickType {
  item: ParamsType;
  e?: React.MouseEvent;
}

export interface UseLikeType {
  postLike: (params: UseLikeParamType) => void;
  removeLike: (params: UseLikeParamType) => void;
  handleLikeClick: (item: ParamsType, e: React.MouseEvent) => void;
}

export type HandleLikeActionType = (
  action: (params: UseLikeParamType) => void,
  params: UseLikeParamType,
) => void;
