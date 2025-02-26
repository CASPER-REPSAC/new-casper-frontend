import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { getErrorMessage } from '@app/_constants/message';
import { PATH } from '@app/_constants/urls';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

/**
 * @deprecated useMyInfo 사용하여 로그인 정보 불러와주세요
 */

function useOnLogin() {
  const { toast } = useToast();
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    push(PATH.home.url);
    toast({ title: '로그인', description: '로그인 성공했어요' });
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
    const code = error.response?.data.code;

    if (!code) throw new Error('Not found error code.');

    toast({
      variant: 'destructive',
      title: '로그인',
      description: getErrorMessage(code),
    });
  };

  const onSettled = () => {
    queryClient.invalidateQueries({ queryKey: ['me'] });
  };

  return {
    onSuccess,
    onError,
    onSettled,
  };
}

export default useOnLogin;
