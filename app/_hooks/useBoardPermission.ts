import { roleState } from 'app/_store/permissionAtoms';
import { BoardType } from '@src/types/boardTypes';
import { useRecoilValue } from 'recoil';

interface BoardPermission {
  read: boolean;
  write: boolean;
}

function useBoardPermission(boardType: BoardType): BoardPermission {
  const role = useRecoilValue(roleState);

  switch (role) {
    case '관리자':
      return { read: true, write: true };
    case '정회원':
      return getPermissionForFullMember(boardType);
    case '준회원':
      return getPermissionsForAssociateMember(boardType);
    default:
      return { read: false, write: false };
  }
}

function getPermissionForFullMember(boardType: BoardType): BoardPermission {
  switch (boardType) {
    case 'notice_board':
      return { read: true, write: false };
    case 'full_member_board':
      return { read: true, write: true };
    case 'graduate_member_board':
      return { read: true, write: true };
    case 'associate_member_board':
      return { read: true, write: true };
    default:
      return { read: false, write: false };
  }
}

function getPermissionsForAssociateMember(
  boardType: BoardType,
): BoardPermission {
  switch (boardType) {
    case 'notice_board':
      return { read: true, write: false };
    case 'full_member_board':
      return { read: false, write: false };
    case 'graduate_member_board':
      return { read: false, write: false };
    case 'associate_member_board':
      return { read: true, write: true };
    default:
      return { read: false, write: false };
  }
}

export default useBoardPermission;
