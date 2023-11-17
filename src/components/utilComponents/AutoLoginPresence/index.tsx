import { accessTokenState } from '@src/atoms';
import useAutoLoginMutation from '@src/hooks/apis/useAutoLoginMutation';
import { ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  children: ReactNode;
}

function AutoLoginPresence({ children }: Props) {
  const { mutate: mutateAutoLogin } = useAutoLoginMutation();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    if (accessToken) return;
    mutateAutoLogin();
  }, [accessToken, mutateAutoLogin]);

  return <>{children}</>;
}

export default AutoLoginPresence;
