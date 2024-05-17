import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useEmailKeyVerifiactionMutation() {
  const mutationKey = ['emailKey'];
  const mutationFn = ({
    emailKey,
    email,
  }: {
    emailKey: string;
    email: string;
  }) =>
    axios.post(`/proxy/api/mail/emailkey?email=${email}&emailKey=${emailKey}`);
  return useMutation({ mutationKey, mutationFn });
}

export default useEmailKeyVerifiactionMutation;
