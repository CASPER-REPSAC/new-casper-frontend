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

export const accessTokenState = atom<string | undefined>({
  key: 'accessToken',
  default: undefined,
});

export const popupListState = atom<{ key: Key; message: string }[]>({
  key: 'popupList',
  default: [],
});

export const pageShadowState = atom({
  key: 'pageShadow',
  default: false,
});
