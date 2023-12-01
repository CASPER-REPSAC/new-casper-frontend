import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const editableState = atom<boolean>({
  key: 'editable',
  default: false,
});
