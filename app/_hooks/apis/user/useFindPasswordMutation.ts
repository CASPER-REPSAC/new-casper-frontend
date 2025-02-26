import loginService from '@app/_service/loginService';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useFindPasswordMutation() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (email: string) => loginService.findPassword(email),
    onSuccess: () =>
      toast({
        description: '이메일로 초기화된 비밀번호를 전송했어요.',
      }),

    onError: () =>
      toast({
        variant: 'destructive',
        description: '가입한 이메일을 찾을 수 없어요.',
      }),
  });
}

export default useFindPasswordMutation;
