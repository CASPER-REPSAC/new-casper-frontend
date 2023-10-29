import { Key } from 'react';
import { atom, selector } from 'recoil';

export const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export const myProfile = atom({
  key: 'myProfile',
  default: '',
});

export const accessTokenState = atom<string | undefined>({
  key: 'accessToken',
  default: undefined,
});
export const loginState = selector({
  key: 'login',
  get: ({ get }) => {
    const accessToken = get(accessTokenState);
    const loginStatus = !!accessToken;
    return loginStatus;
  },
});

export const popupListState = atom<{ key: Key; message: string }[]>({
  key: 'popupList',
  default: [],
});

export const pageShadowState = atom({
  key: 'pageShadow',
  default: false,
});
