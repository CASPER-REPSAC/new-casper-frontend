import { Key } from 'react';
import { atom } from 'recoil';

export const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export const loginState = atom({
  key: 'login',
  default: false,
});

export const accessTokenState = atom({
  key: 'accessToken',
  default: '',
});

export const popupListState = atom<{ key: Key; message: string }[]>({
  key: 'popupList',
  default: [],
});
