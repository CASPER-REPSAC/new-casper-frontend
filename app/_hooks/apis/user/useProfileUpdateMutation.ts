import { TOAST_TITLE } from '@app/_constants/message';
import userService from '@app/_service/userService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { ProfileUpdateRequset } from '@app/_types/userTypes';
import { useMutation } from '@tanstack/react-query';

function useProfileUpdateMutation() {
  const { toast } = useToast();

  const mutationFn = async (data: ProfileUpdateRequset) =>
    userService.updateProfile(data);

  const onSuccess = () => {
    toast({
      title: '프로필 수정',
      description: '프로필이 업데이트 되었어요.',
    });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: '프로필 업데이트 실패했어요.',
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useProfileUpdateMutation;
