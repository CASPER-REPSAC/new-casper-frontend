import { AtomEffect, atom } from 'recoil';

const localStorageEffect: (key: string) => AtomEffect<'dark' | 'light'> =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') return;

    const savedValue = localStorage.getItem(key);
    if (savedValue === 'light' || savedValue === 'dark') {
      setSelf(savedValue);
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
        return;
      }
      localStorage.setItem(key, newValue);
    });
  };

const themeState = atom<'dark' | 'light'>({
  key: 'theme',
  default: 'dark',
  effects: [localStorageEffect('theme')],
});

export default themeState;
