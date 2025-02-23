import { useMutation } from '@tanstack/react-query';
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
    },
    onError,
  });
}

export default useGithubLoginMutation;
