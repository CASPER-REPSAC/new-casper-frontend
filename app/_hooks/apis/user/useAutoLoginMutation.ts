import { useMutation } from '@tanstack/react-query';
import { POPUP_DURATION } from 'app/_constants/duration';
import { ERROR_MESSAGE, POPUP_MESSAGE } from 'app/_constants/message';
import usePopup from 'app/_hooks/usePopup';
import { postAutoLogin } from 'app/_service/user';
import { accessTokenState } from 'app/_store/permissionAtoms';
import { ErrorResponse } from 'app/_types/errorTypes';
import { AutoLoginResponse } from 'app/_types/loginTypes';
import { AxiosError, AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

function useAutoLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = () => postAutoLogin(true);

  const onSuccess = ({ data }: AxiosResponse<AutoLoginResponse>) => {
    setAccessToken(data.accessToken);
    openAndDeletePopup({
      message: POPUP_MESSAGE.autoLoginSuccess,
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    switch (response?.data.code) {
      case -100:
        openAndDeletePopup({
          message: ERROR_MESSAGE.autoLogin,
          duration: POPUP_DURATION.medium,
        });
        break;
      default:
        break;
    }
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useAutoLoginMutation;
