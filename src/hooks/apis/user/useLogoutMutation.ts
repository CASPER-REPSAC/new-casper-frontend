import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { usePopup } from '@src/hooks';
import { LOGOUT_API } from '@src/constants/apiUrl';
import { POPUP_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import { accessTokenState, myProfileState } from '@src/recoil/permissionAtoms';

function useLogoutMutation() {
  const [accessToken, setAcessToken] = useRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = () =>
    axios.post(LOGOUT_API, undefined, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  const onSuccess = () => {
    setAcessToken(undefined);
    setMyProfile(undefined);
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
