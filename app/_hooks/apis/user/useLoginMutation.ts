import axios, { AxiosError, AxiosResponse } from 'axios';
import { accessTokenState, myProfileState } from 'app/_store/permissionAtoms';
import { usePopup } from 'app/_hooks';
import { LoginRequest, LoginResponse } from '@src/types/loginTypes';
import { LOGINT_API } from 'app/_constants/apiUrl';
import { PATH } from 'app/_constants/urls';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { POPUP_DURATION } from 'app/_constants/duration';
import { ERROR_MESSAGE, POPUP_MESSAGE } from 'app/_constants/message';

export default function useLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (params: LoginRequest) =>
    axios.post<LoginResponse>(LOGINT_API, params);

  const onLoinSuccess = ({ data }: AxiosResponse<LoginResponse>) => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.loginSuccess,
      duration: POPUP_DURATION.medium,
    });

    setAccessToken(data.accessToken);
    setMyProfile(data.myInfo);
    push(PATH.home.url);
  };

  const onLoinError = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        openAndDeletePopup({
          message: POPUP_MESSAGE.failedToLogin,
          duration: POPUP_DURATION.medium,
        });
        break;
      default:
        openAndDeletePopup({
          message: ERROR_MESSAGE.unknown,
          duration: POPUP_DURATION.medium,
        });
    }
  };

  return useMutation({
    mutationFn,
    onSuccess: onLoinSuccess,
    onError: onLoinError,
  });
}
