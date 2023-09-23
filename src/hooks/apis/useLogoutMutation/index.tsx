import { accessTokenState, loginState } from '@src/atoms';
import usePopup from '@src/hooks/usePopup';
import { LOGOUT_API } from '@src/utils/apiUrl';
import { POPUP_MESSAGE, POPUP_TIME } from '@src/utils/constants';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';

function useLogoutMutation() {
  const setLogin = useSetRecoilState(loginState);
  const setAcessToken = useSetRecoilState(accessTokenState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = () => axios.post(LOGOUT_API);
  const onSuccess = () => {
    setLogin(false);
    setAcessToken(undefined);
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.logout,
      time: POPUP_TIME.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.logoutError,
      time: POPUP_TIME.medium,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useLogoutMutation;
