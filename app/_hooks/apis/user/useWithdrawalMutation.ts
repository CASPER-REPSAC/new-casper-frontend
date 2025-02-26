import userService from '@app/_service/userService';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useWithdrawalMutation() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (userId: string) => {
      await userService.withdrawal(userId);
    },

    onSuccess: () =>
      toast({
        title: '회원 탈퇴',
        description: '회원 탈퇴에 성공했어요.',
      }),

    onError: () =>
      toast({
        variant: 'destructive',
        title: '회원 탈퇴',
        description: '회원 탈퇴에 실패했어요.',
      }),
  });
}

export default useWithdrawalMutation;
