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

const htmlClassEffect: AtomEffect<'dark' | 'light'> = ({ onSet }) => {
  onSet((newValue, _, isReset) => {
    if (isReset) {
      return;
    }

    const htmlElement = document.querySelector('html');
    if (newValue === 'dark') {
      htmlElement?.classList.add('dark');
    }
    if (newValue === 'light') {
      htmlElement?.classList.remove('dark');
    }
  });
};

const themeState = atom<'dark' | 'light'>({
  key: 'theme',
  default: 'dark',
  effects: [localStorageEffect('theme'), htmlClassEffect],
});

export default themeState;
