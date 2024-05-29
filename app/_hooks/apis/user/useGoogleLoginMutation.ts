import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useGoogleLoginMutation() {
  return useMutation({
    mutationFn: (code: string) =>
      axios.post('/proxy/api/user/google', { code }),
  });
}

export default useGoogleLoginMutation;
