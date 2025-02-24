import { useMutation } from '@tanstack/react-query';
import loginService from '@app/_service/loginService';
import useOnLogin from './useOnLogin';

function useCasperLoginMutation() {
  const { onSuccess, onError, onSettled } = useOnLogin();

  return useMutation({
    mutationFn: ({
      code,
      redirectUri,
    }: {
      code: string;
      redirectUri: string;
    }) => loginService.loginCasper({ code, redirectUri }),

    onSuccess,
    onError,
    onSettled,
  });
}

export default useCasperLoginMutation;
