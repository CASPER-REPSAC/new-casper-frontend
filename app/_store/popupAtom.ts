import { Key } from 'react';
import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const popupListState = atom<{ key: Key; message: string }[]>({
  key: 'popupList',
  default: [],
});
