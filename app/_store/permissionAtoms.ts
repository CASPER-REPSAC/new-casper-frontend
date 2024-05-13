import { MyProfile } from '@app/_types/userTypes';
import { atom, selector } from 'recoil';

export const myProfileState = atom<MyProfile | null>({
  key: 'myProfile',
  default: null,
});

export const roleState = selector<'손님' | '관리자' | '정회원' | '준회원'>({
  key: 'role',
  get: ({ get }) => {
    const myProfile = get(myProfileState);

    switch (myProfile?.role) {
      case 'active':
        return '정회원';
      case 'rest':
        return '정회원';
      case 'graduate':
        return '정회원';
      case 'associate':
        return '준회원';
      case 'admin':
        return '관리자';
      default:
        return '손님';
    }
  },
});

export const accessTokenState = atom<string | undefined>({
  key: 'accessToken',
  default: undefined,
});

export const bearerTokenState = selector({
  key: 'bearerToken',
  get: ({ get }) => {
    const accessToken = get(accessTokenState);
    const bearerToken = `Bearer ${accessToken}`;
    return bearerToken;
  },
});

export const loginState = selector({
  key: 'login',
  get: ({ get }) => {
    const accessToken = get(accessTokenState);
    const loginStatus = !!accessToken;
    return loginStatus;
  },
});
