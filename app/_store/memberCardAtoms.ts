import { MemberProfile } from '@app/_types/userTypes';
import { atom } from 'recoil';

export const detailedMemberPopupState = atom({
  key: 'detailedMemberPopup',
  default: false,
});
export const selectedMemberState = atom<MemberProfile | null>({
  key: 'selectedMember',
  default: null,
});
