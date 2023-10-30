import { isPageLoadingState } from '@src/atoms/pageLoadingState';
import { useSetRecoilState } from 'recoil';

function useLoadingProgressBar() {
  const setIsPageLoading = useSetRecoilState(isPageLoadingState);

  const start = () => {
    setIsPageLoading(true);
  };

  const done = () => {
    setIsPageLoading(false);
  };

  return {
    start,
    done,
  };
}

export default useLoadingProgressBar;
