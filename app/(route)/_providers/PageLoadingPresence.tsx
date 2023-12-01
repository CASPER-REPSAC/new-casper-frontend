import { isPageLoadingState } from 'app/_store';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface Props {
  children: ReactNode;
}

function PageLoadingPresence({ children }: Props) {
  const setIsPageLoading = useSetRecoilState(isPageLoadingState);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsPageLoading(false);

    return () => {
      setIsPageLoading(true);
    };
  }, [pathname, searchParams, setIsPageLoading]);

  return <>{children}</>;
}

export default PageLoadingPresence;
