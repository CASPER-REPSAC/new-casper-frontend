import loginService from '@app/_service/loginService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';

function useUpdatePasswordMutation() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: (newPassword: string) =>
      loginService.updatePassword(newPassword),

    onSuccess: () => {
      toast({
        description: '비밀번호가 변경되었어요.',
      });
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
