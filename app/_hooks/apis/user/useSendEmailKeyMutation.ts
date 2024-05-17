import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useSendEmailKeyMutation() {
  const mutationKey = ['email'];
  const mutationFn = (email: string) =>
    axios.post(`/proxy/api/mail/send?email=${email}`);

  return useMutation({ mutationKey, mutationFn });
}

export default useSendEmailKeyMutation;
