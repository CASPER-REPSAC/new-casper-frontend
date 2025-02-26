import { atomFamily } from 'recoil';
import { BoardDetailParams } from '@app/_types/boardTypes';

// eslint-disable-next-line import/prefer-default-export
export const editableStateFamily = atomFamily<boolean, BoardDetailParams>({
  key: 'editableStateFamily',
  default: false,
});
