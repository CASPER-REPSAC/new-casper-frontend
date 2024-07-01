import { SNS_LAST_LOGIN } from '@app/_constants/localStorage';
import { useEffect, useState } from 'react';

function useSnsLastLogin() {
  const [lastLogin, setLastLogin] = useState<string | null>(null);
  useEffect(() => {
    localStorage.getItem(SNS_LAST_LOGIN);
    setLastLogin(localStorage.getItem(SNS_LAST_LOGIN));
  }, []);

  return { lastLogin };
}

export default useSnsLastLogin;
