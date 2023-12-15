import { BoardType } from 'app/_types/boardTypes';
import { FunnelStepType } from 'app/_types/joinTypes';

// eslint-disable-next-line import/prefer-default-export
export function isBoardType(str: string): str is BoardType {
  return (
    str === 'notice_board' ||
    str === 'graduate_member_board' ||
    str === 'full_member_board' ||
    str === 'associate_member_board'
  );
}
export function isFunnelType(str: string): str is FunnelStepType {
  return (
    str === 'agree' ||
    str === 'email' ||
    str === 'name' ||
    str === 'id' ||
    str === 'password' ||
    str === 'finish'
  );
}
