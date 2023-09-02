import { atom } from 'recoil';

const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export default isDarkState;
