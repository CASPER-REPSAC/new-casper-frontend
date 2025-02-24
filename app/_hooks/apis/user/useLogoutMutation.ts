import { useMutation, useQueryClient } from '@tanstack/react-query';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';

import { revalidateTag } from '@app/_actions';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import loginService from '@app/_service/loginService';

function useLogoutMutation() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = () => loginService.logout();

  const onSuccess = async () => {
    await revalidateTag('accessToken');
    toast({
      description: POPUP_MESSAGE.logoutSuccess,
    });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: POPUP_MESSAGE.failedToLogout,
    });
  };

  const onSettled = () => {
    queryClient.invalidateQueries({ queryKey: ['me'] });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
    onSettled,
  });
}

export default useLogoutMutation;
