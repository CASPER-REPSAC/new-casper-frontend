import { useMutation } from '@tanstack/react-query';
import { SNS_LAST_LOGIN } from '@app/_constants/localStorage';
import loginService from '@app/_service/loginService';
import useOnLogin from './useOnLogin';

function useGithubLoginMutation() {
  const { onSuccess: onLoginSuccess, onError } = useOnLogin();

  return useMutation({
    mutationFn: ({
      code,
      redirectUri,
    }: {
      code: string;
      redirectUri: string;
    }) => loginService.loginGithub({ code, redirectUri }),

    onSuccess: (data) => {
      onLoginSuccess(data);
      localStorage.setItem(SNS_LAST_LOGIN, 'github');
    },
    onError,
  });
}

export default useGithubLoginMutation;
