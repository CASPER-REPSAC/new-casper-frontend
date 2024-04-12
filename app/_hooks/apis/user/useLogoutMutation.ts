import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { usePopup } from '@app/_hooks';
import { LOGOUT_API } from '@app/_constants/apiUrl';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import {
  accessTokenState,
  bearerTokenState,
  myProfileState,
} from '@app/_store/permissionAtoms';
import { revalidateTag } from '@app/_actions';

function useLogoutMutation() {
  const bearerToken = useRecoilValue(bearerTokenState);
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = () =>
    axios.post(`/proxy${LOGOUT_API}`, undefined, {
      headers: { Authorization: bearerToken },
    });

  const onSuccess = async () => {
    await revalidateTag('accessToken');
    setAccessToken(undefined);
    setMyProfile({
      id: '',
      role: undefined,
      name: '',
      nickname: '',
      email: '',
      introduce: '',
      homepage: '',
      image: '',
    });
    openAndDeletePopup({
      message: POPUP_MESSAGE.logoutSuccess,
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.failedToLogout,
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useLogoutMutation;
