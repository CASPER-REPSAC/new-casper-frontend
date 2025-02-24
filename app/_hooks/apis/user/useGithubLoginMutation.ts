import { useMutation } from '@tanstack/react-query';
import loginService from '@app/_service/loginService';
import useOnLogin from './useOnLogin';

function useGithubLoginMutation() {
  const { onSuccess, onError, onSettled } = useOnLogin();

  return useMutation({
    mutationFn: ({
      code,
      redirectUri,
    }: {
      code: string;
      redirectUri: string;
    }) => loginService.loginGithub({ code, redirectUri }),

    onSuccess,
    onError,
    onSettled,
  });
}

export default useGithubLoginMutation;
