import { isPageLoadingState } from 'app/_store';
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