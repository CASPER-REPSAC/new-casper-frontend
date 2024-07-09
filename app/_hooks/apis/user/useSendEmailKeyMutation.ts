import { ERROR_MESSAGE } from '@app/_constants/message';
import userService from '@app/_service/userService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

function useSendEmailKeyMutation() {
  const { toast } = useToast();
  const mutationKey = ['email'];
  const mutationFn = async (email: string) => {
    const data = userService.sendEmailKey(email);
    return data;
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
    const code = error.response?.data.code;
    switch (code) {
      case -203:
        toast({
          variant: 'destructive',
          title: '회원가입',
          description: ERROR_MESSAGE['-203'],
        });
        break;
      default:
        toast({
          variant: 'destructive',
          title: '회원가입',
          description: ERROR_MESSAGE.unknown,
        });
    }
  };

  return useMutation({ mutationKey, mutationFn, onError });
}

export default useSendEmailKeyMutation;
