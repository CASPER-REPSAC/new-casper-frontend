import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useEmailKeyVerifiactionMutation() {
  const { toast } = useToast();
  const mutationKey = ['emailKey'];
  const mutationFn = ({
    emailKey,
    email,
  }: {
    emailKey: string;
    email: string;
  }) =>
    axios.post(`/proxy/api/mail/emailkey?email=${email}&emailKey=${emailKey}`);

  const onSuccess = () => {
    toast({ description: '이메일 인증 성공했어요.' });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      description: '인증 코드를 다시확인해주세요.',
    });
  };

  return useMutation({ mutationKey, mutationFn, onSuccess, onError });
}

export default useEmailKeyVerifiactionMutation;
