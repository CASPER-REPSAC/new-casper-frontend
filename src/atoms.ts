/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export const loginState = atom({
  key: 'login',
  default: false,
});
