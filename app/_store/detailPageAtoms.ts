import { BoardDetailParams } from '@app/_types/boardTypes';
import { atomFamily } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const editableStateFamily = atomFamily<boolean, BoardDetailParams>({
  key: 'editableStateFamily',
  default: false,
});
