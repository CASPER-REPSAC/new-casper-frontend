import { atomFamily } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const categoryStateFamily = atomFamily({
  key: 'categoryState',
  default: 'all',
});
