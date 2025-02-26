import { atom } from 'recoil';
import { MemberProfile } from '@app/_types/userTypes';

export const detailedMemberPopupState = atom({
  key: 'detailedMemberPopup',
  default: false,
});
export const selectedMemberState = atom<MemberProfile | null>({
  key: 'selectedMember',
  default: null,
});
