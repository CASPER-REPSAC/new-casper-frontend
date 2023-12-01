import { MyProfile } from 'app/_types/userTypes';
import { atom, selector } from 'recoil';

export const myProfileState = atom<MyProfile | undefined>({
  key: 'myProfile',
  default: undefined,
});

export const roleState = selector({
  key: 'role',
  get: ({ get }) => {
    const myProfile = get(myProfileState);
    return myProfile?.role;
  },
});

export const accessTokenState = atom<string | undefined>({
  key: 'accessToken',
  default: undefined,
});

export const loginState = selector({
  key: 'login',
  get: ({ get }) => {
    const accessToken = get(accessTokenState);
    const loginStatus = !!accessToken;
    return loginStatus;
  },
});
