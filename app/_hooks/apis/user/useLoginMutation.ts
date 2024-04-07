import axios, { AxiosError, AxiosResponse } from 'axios';
import { accessTokenState, myProfileState } from '@app/_store/permissionAtoms';
import { usePopup } from '@app/_hooks';
import { LoginRequest, LoginResponse } from '@app/_types/loginTypes';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { POPUP_DURATION } from '@app/_constants/duration';
import { ERROR_MESSAGE, POPUP_MESSAGE } from '@app/_constants/message';
import { LOGIN_API } from '@app/_constants/apiUrl';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useRouter } from 'next/navigation';

export default function useLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (params: LoginRequest) =>
    axios.post<LoginResponse>(`/proxy${LOGIN_API}`, params);

  const onLoinSuccess = async ({ data }: AxiosResponse<LoginResponse>) => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.loginSuccess,
      duration: POPUP_DURATION.medium,
    });
    push('/');
    localStorage.setItem('isLoggedIn', 'true');
    setAccessToken(data.accessToken);
    setMyProfile(data.myInfo);
  };

  const onLoinError = (error: AxiosError<ErrorResponse>) => {
    const code = error.response?.data.code;
    switch (code) {
      case -101:
        openAndDeletePopup({
          message: ERROR_MESSAGE['-101'],
          duration: POPUP_DURATION.medium,
        });
        break;
      case -102:
        openAndDeletePopup({
          message: ERROR_MESSAGE['-102'],
          duration: POPUP_DURATION.medium,
        });
        break;
      default:
        openAndDeletePopup({
          message: ERROR_MESSAGE.unknown,
          duration: POPUP_DURATION.medium,
        });
        break;
    }
  };

  return useMutation({
    mutationFn,
    onSuccess: onLoinSuccess,
    onError: onLoinError,
  });
}
