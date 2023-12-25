import { useMutation } from '@tanstack/react-query';
import { AUTO_LOGIN_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { ERROR_MESSAGE, POPUP_MESSAGE } from '@app/_constants/message';
import usePopup from '@app/_hooks/usePopup';
import { accessTokenState, myProfileState } from '@app/_store/permissionAtoms';
import { ErrorResponse } from '@app/_types/errorTypes';
import { AutoLoginResponse } from '@app/_types/loginTypes';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

function useAutoLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = () =>
    axios.post<AutoLoginResponse>(`/proxy${AUTO_LOGIN_API}`);

  const onSuccess = ({ data }: AxiosResponse<AutoLoginResponse>) => {
    setAccessToken(data.accessToken);
    setMyProfile(data.myInfo);
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
