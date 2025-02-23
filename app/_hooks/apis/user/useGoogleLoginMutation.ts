import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useOnLogin from './useOnLogin';

function useGoogleLoginMutation() {
  const { onSuccess: onLoginSuccess, onError } = useOnLogin();

  return useMutation({
    mutationFn: ({
      code,
      redirectUri,
    }: {
      code: string;
      redirectUri: string;
    }) =>
      axios.post('/proxy/api/user/google', {
        code,
        redirectUri,
      }),

    onSuccess: (data) => {
      onLoginSuccess(data);
    },
    onError,
  });
}

export default useGoogleLoginMutation;
