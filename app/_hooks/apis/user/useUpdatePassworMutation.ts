import loginService from '@app/_service/loginService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { NEW_PATH } from '@app/_constants/urls';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useUpdatePasswordMutation() {
  const { toast } = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: (newPassword: string) =>
      loginService.updatePassword(newPassword),

    onSuccess: () => {
      toast({
        description: '비밀번호가 변경되었어요.',
      });
      push(NEW_PATH.mypage.url);
    },

    onError: () => {
      toast({
        variant: 'destructive',
        description: '비밀번호 변경에 실패했어요.',
      });
    },
  });
}

export default useUpdatePasswordMutation;
