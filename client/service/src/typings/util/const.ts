// leftManuData
export interface leftManuDataItemType {
  title: string;
  path: string;
  lv2?: leftManuDataItemType[];
}

export interface leftManuDataType {
  [key: string]: leftManuDataItemType;
}
