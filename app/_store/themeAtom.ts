import { atom } from 'recoil';

const themeState = atom<'dark' | 'light'>({
  key: 'theme',
  default: 'dark',
});

export default themeState;
