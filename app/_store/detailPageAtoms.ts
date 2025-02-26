import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { BoardDetailParams } from '@app/_types/boardTypes';

export const editableStateFamily = atomFamily(
  ({ editable }: { id: BoardDetailParams; editable: boolean }) =>
    atom(editable),
  (a, b) => a.id === b.id,
);
