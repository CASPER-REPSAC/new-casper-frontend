import { atom, selector } from 'recoil';

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
