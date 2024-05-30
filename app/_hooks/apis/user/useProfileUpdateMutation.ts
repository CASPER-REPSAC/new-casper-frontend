import { PROFILE_UPDATE_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { ProfileUpdateRequset } from '@app/_types/userTypes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

function useProfileUpdateMutation() {
  const { toast } = useToast();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = async (data: ProfileUpdateRequset) =>
    axios.post(`/proxy${PROFILE_UPDATE_API}`, data, {
      headers: {
        Authorization: bearerToken,
      },
    });

  const onSuccess = () => {
    toast({
      description: '프로필이 업데이트 되었어요.',
      duration: POPUP_DURATION.medium,
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
