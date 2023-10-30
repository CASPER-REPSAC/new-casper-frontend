import { DefaultValue, atom, selector } from 'recoil';

export const pageLoadingState = atom({
  key: 'pageLoading',
  default: {
    isLoading: false,
    percentage: 0,
  },
});

export const isPageLoadingState = selector({
  key: 'isPageLoading',
  get: ({ get }) => {
    const { isLoading } = get(pageLoadingState);
    return isLoading;
  },

  set: ({ set }, newValue) => {
    set(pageLoadingState, ({ percentage }) => ({
      isLoading: newValue instanceof DefaultValue ? false : newValue,
      percentage,
    }));
  },
});

export const pageLoadingPercentageState = selector({
  key: 'pageLoadingPercentage',
  get: ({ get }) => {
    const { percentage } = get(pageLoadingState);
    return percentage;
  },

  set: ({ set }, newValue) => {
    set(pageLoadingState, ({ isLoading }) => ({
      isLoading,
      percentage: newValue instanceof DefaultValue ? 0 : newValue,
    }));
  },
});
