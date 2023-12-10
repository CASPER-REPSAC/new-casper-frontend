import { Key } from 'react';
import { atom } from 'recoil';

export const popupListState = atom<{ key: Key; message: string }[]>({
  key: 'popupList',
  default: [],
});

export const isPageLoadingState = atom({
  key: 'isPageLoading',
  default: false,
});

export const detailMemberCardShowState = atom({
  key: 'detailMemberCardShow',
  default: false,
});
