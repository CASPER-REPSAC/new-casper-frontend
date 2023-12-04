import { atom, AtomEffect } from 'recoil';

const localStorageEffect: (key: string) => AtomEffect<'dark' | 'light'> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue === 'dark' || savedValue === 'light') {
        setSelf(savedValue);
      }

      onSet((newValue, _, isReset) => {
        if (isReset) {
          localStorage.removeItem(key);
          return;
        }

        localStorage.setItem(key, String(newValue));
      });
    }
  };

const themeState = atom<'dark' | 'light'>({
  key: 'theme',
  default: 'dark',
  effects: [localStorageEffect('theme')],
});

export default themeState;
