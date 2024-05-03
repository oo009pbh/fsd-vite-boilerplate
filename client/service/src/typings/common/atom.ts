import React, { MouseEvent, RefObject } from 'react';
import { CssArchiveType, CustomStyleType } from '@typings/commonUseType';
import { SerializedStyles } from '@emotion/react';

export interface IconDetailType {
  type?: string;
  src: string;
}

// common/atom/Button 의 타입
export interface ButtonType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  prevIcon?: IconDetailType;
  icon?: IconDetailType;
  variant?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

// common/atom/CheckBox 의 타입
export interface CheckBoxType {
  className?: string;
  keyId?: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  variant?: string;
  size?: string;
  customStyle?: SerializedStyles;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckBoxStyleType {
  checked?: boolean;
  variant?: string;
  size?: string;
  customStyle?: SerializedStyles;
  disabled?: boolean;
  indeterminate?: boolean;
}

// common/atom/Ckeditor 의 타입
export interface CkeditorType {
  value: string;
  onChange: (event: EventInfo, editor: Editor) => void;
}

// CKEDITOR5 에서 fontSize 타입검사를 진행하지 않아서 임시로 확장해둔 type
// update 시 지울 것
export interface MyEditorConfig extends EditorConfig {
  fontSize: {
    options: (string | number)[];
  };
}

// common/atom/Datepicker 의 타입
export interface DatepickerType {
  format?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  customStyle?: SerializedStyles;
  onChange?: (date: string) => void;
}

export interface DatepickerStyleType {
  customStyle?: SerializedStyles;
  isRight?: boolean;
  isTop?: boolean;
}

// common/atom/DateRangePicker 의 타입
export interface DateRangePickerType {
  format?: string;
  placeholder?: string;
  dateFrom?: string;
  dateTo?: string;
  className?: string;
  onChange?: (dateFrom: string, dateTo: string) => void;
}

export interface DateRangePickerRangeType {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

export interface DateRangePickerStyleType extends DatepickerStyleType {
  isOneDay?: boolean;
  isShowPicker?: boolean;
}

// common/atom/File 의 타입
export type FileAcceptType =
  | '이미지'
  | '비디오'
  | '오디오'
  | '문서'
  | '텍스트'
  | 'zip';

export interface FileType extends CustomStyleType {
  field: string;
  onChange?: (field: string, files: (string | File)[]) => void;
  accepts?: FileAcceptType[];
  description?: string;
  maxCount?: number;
  files?: (string | File)[];
  render?: (parsedFileUrls: string[], open: () => void) => React.ReactNode;
}

// common/atom/Icon 의 타입
export interface IconType extends CustomStyleType {
  icon: IconDetailType;
  size?: string;
  className?: string;
  style?: CssArchiveType;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// common/atom/IconTag 의 타입
export interface IconTagType {
  icon: IconDetailType;
  color?: string;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface IconTagStyleType {
  background?: string;
}

// common/atom/InputForm 의 타입
export interface InputFormType {
  // 아래는 input태그 외에 사용되는 props 의 type을 나타냄
  // otherProps 형태로 반환
  leftIcon?: IconDetailType;
  rightIcon?: IconDetailType;
  onClickLeftIcon?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onClickRightIcon?: (event: React.MouseEvent<HTMLSpanElement>) => void;

  description?: string;
  customStyle?: SerializedStyles;
  className?: string;
  size?: string;
  variant?: string;
  inputType?: string;
  // 아래는 input에 들어가는 props 들을 나타냄
  id?: string;
  width?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  value?: string | number;
  type?: string;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  autoComplete?: string;
}

// common/atom/Modal 의 타입
export interface ModalType {
  isShowing: boolean;
  hide?: () => void;
  title?: string;
  content?: React.ReactNode;
  cancel?: ButtonType;
  subAction?: ButtonType;
  confirm?: ButtonType;
  customStyle?: SerializedStyles;
}

export interface ModalStyleType {
  customStyle?: SerializedStyles;
  content?: React.ReactNode;
}

// common/atom/Pagination 의 타입
export interface PaginationParamsType {
  skip?: number;
  limit?: number;
}

export interface PaginationType {
  pageParams?: PaginationParamsType;
  count?: number;
  handleChangePage?: (page: number) => void;
  isDisplayDoubleArrow?: boolean;
}

// common/atom/Postcode 의 타입
export interface PostCodeType {
  setIsOpen?: (isOpen: boolean) => void;
  getAddressData?: (data: Address) => void;
}

// common/atom/RadioBox 의 타입
export interface OptionType {
  label: string | React.ReactNode;
  value: string | number;
  disabled?: boolean;
  isChecked?: boolean;
  isAll?: string;
}

export interface RadioType {
  field?: string;
  label?: string;
  isChecked?: boolean;
  onChange?: (value: string | number | boolean) => void;
  variant?: string;
  style?: CssArchiveType;
  customStyle?: SerializedStyles;
  className?: string;
}

export interface RadioBoxType {
  field?: string;
  value: string;
  options: OptionType[];
  onChange?: (value: string | number) => void;
  variant?: string;
  style?: CssArchiveType;
  customStyle?: SerializedStyles;
  className?: string;
}

export interface OptionWithClickType extends OptionType {
  onClick?: () => void;
}

// common/atom/Select 의 타입
export interface SelectType extends CustomStyleType {
  options?: OptionWithClickType[];
  extraOptions?: OptionWithClickType[];
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: string;
  width?: string;
  onToggle?: (isOpen: boolean) => void;

  isIconCustom?: boolean;
}

export interface SelectStyleType extends SelectType {
  isOpen: boolean;

  variant: string;

  size: string;
}

// common/atom/Tag 의 타입
export interface TagType {
  label?: string;
  className?: string;
  size?: string;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  customStyle?: SerializedStyles;
}

// common/atom/TextArea 의 타입
export interface TextAreaType extends CustomStyleType {
  value?: any;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickRightIcon?: (event: MouseEvent<HTMLSpanElement>) => void;
  rightIconFunc?: (inputString: string) => IconDetailType | undefined;
  textareaRef?: RefObject<HTMLTextAreaElement>;
  customIconStyle?: (inputString: string) => SerializedStyles;
  rows?: number;
}

export interface CardLeftBottomType {
  type: 'tag' | 'by' | 'link' | 'date';
  writtenBy?: string;
  tags?: string[];
  linkLabel?: string;
  onClickLink?: React.MouseEventHandler<HTMLDivElement>;
  date?: string;
}

export interface CardRightBottomType {
  type: 'count' | 'pagination' | 'date';
  likeYn?: boolean;
  likeCount?: string | number;
  viewCount?: string | number;
  totalPage?: string | number;
  currentPage?: string | number;
  date?: string;
}

export interface CardType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  variant?: string;
  size?: string;
  likeYn?: string | boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isLikeButton?: boolean;
  onClickLike?: React.MouseEventHandler<HTMLDivElement>;
  imageSrc?: string;
  leftBottom?: CardLeftBottomType;
  rightBottom?: CardRightBottomType;
  description?: string;
  isHover?: boolean;
  handleHoverClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface CardStyleType {
  className?: string;
  customStyle?: SerializedStyles;
  variant?: string;
  size?: string;
  imageSrc?: string;
  isLikeButton?: boolean;
  leftBottom?: CardLeftBottomType;
  rightBottom?: CardRightBottomType;
  isHover?: boolean;
  likeYn?: boolean;
}

export interface BannerType extends CardType {}

export interface BannerStyleType extends CardStyleType {}

export interface TableCardType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  variant?: string;
  description?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClickLike?: React.MouseEventHandler<HTMLDivElement>;
  imageSrc?: string;
  tags?: string[];
  likeYn?: boolean;
  rightBottom?: CardRightBottomType;
  writtenBy?: string;
  subImages?: string[];
}

export interface TitleType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
}

export interface FestivalCardLeftBottomType {
  type: 'tag';
  tags?: string[];
}

export interface FestivalCardRightBottomType {
  type: 'date';
  date?: string;
}

export interface FestivalCardType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  imageSrc?: string;
  leftBottom?: FestivalCardLeftBottomType;
  rightBottom?: FestivalCardRightBottomType;
}

export interface FestivalCardStyleType {
  className?: string;
  customStyle?: SerializedStyles;
  size?: string;
  imageSrc?: string;
  leftBottom?: FestivalCardLeftBottomType;
  rightBottom?: FestivalCardRightBottomType;
}

export interface DateButtonType {
  label?: string;
  description?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  customStyle?: SerializedStyles;
  className?: string;
  isActive?: boolean;
}

export interface SliderButtonType {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  customStyle?: SerializedStyles;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  sliderRef?: React.RefObject<HTMLDivElement>;
}

export interface BreadCrumbleType {
  oneDepthImageSrc?: string;
  twoDepthLabel?: string;
  threeDepthLabel?: string;
  forthDepthLabel?: string;
  oneDepthClick?: React.MouseEventHandler<HTMLDivElement>;
  twoDepthClick?: React.MouseEventHandler<HTMLDivElement>;
  threeDepthClick?: React.MouseEventHandler<HTMLDivElement>;
  customStyle?: SerializedStyles;
  className?: string;
}

export interface DropDownType extends CustomStyleType {
  value?: string | number;
  onClick?: (value: string | number) => void;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isDemo?: boolean;
  onDemoClicked?: () => void;
  onSelectEngine?: (enginName: string) => void;
}

export interface SearchHistoryDropDownType extends CustomStyleType {
  setParentId?: React.Dispatch<React.SetStateAction<string>>;
  parentId?: string;
  onOpenSubReport?: (questionId: number) => void;
  isDemo?: boolean;
  onDemoClicked?: () => void;
  canUseSubReport?: boolean;
}

export interface FaqType {
  className?: string;
  customStyle?: SerializedStyles;
  question?: string;
  answer?: string;
}

export interface SearchCardType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  variant?: string;
  description?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  imageSrc?: string;
  tags?: string[];
}

export interface CalendarCardDateType {
  dDay?: string;
  period?: string;
}

export interface CalendarCardType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  imageSrc?: string;
  season?: string;
  region?: number;
  state?: number;
  date?: CalendarCardDateType;
}

export interface CalendarCardStyleType {
  className?: string;
  customStyle?: SerializedStyles;
  variant?: string;
  size?: string;
  imageSrc?: string;
  isHover?: boolean;
}

export interface SelectSearchType extends InputFormType {
  onClickSearchIcon?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  value?: string;
}

export interface MainBoxType extends CustomStyleType {
  title?: string;
  tags?: string[];
}

export interface MainTagType extends CustomStyleType {
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
