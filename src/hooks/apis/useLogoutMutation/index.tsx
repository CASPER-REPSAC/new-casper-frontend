import { accessTokenState } from '@src/atoms';
import usePopup from '@src/hooks/usePopup';
import { LOGOUT_API } from '@src/constants/apiUrl';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { POPUP_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';

function useLogoutMutation() {
  const [accessToken, setAcessToken] = useRecoilState(accessTokenState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = () =>
    axios.post(LOGOUT_API, undefined, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  const onSuccess = () => {
    setAcessToken(undefined);
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.logout,
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.logoutError,
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
