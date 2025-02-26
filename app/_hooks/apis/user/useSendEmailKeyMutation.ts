import userService from '@app/_service/userService';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '@app/_constants/message';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

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
