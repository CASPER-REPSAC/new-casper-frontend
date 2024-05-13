import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { LOGOUT_API } from '@app/_constants/apiUrl';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import {
  accessTokenState,
  bearerTokenState,
  myProfileState,
} from '@app/_store/permissionAtoms';
import { revalidateTag } from '@app/_actions';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useLogoutMutation() {
  const bearerToken = useRecoilValue(bearerTokenState);
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { toast } = useToast();

  const mutationFn = () =>
    axios.post(`/proxy${LOGOUT_API}`, undefined, {
      headers: { Authorization: bearerToken },
    });

  const onSuccess = async () => {
    await revalidateTag('accessToken');
    setAccessToken(undefined);
    setMyProfile(null);
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

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useLogoutMutation;
