import { CustomStyleType } from '@typings/commonUseType';
import { UseModalReturnType } from '@typings/hooks/useModal';

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
