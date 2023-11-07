import { accessTokenState } from '@src/atoms';
import usePopup from '@src/hooks/usePopup';
import { LoginRequest, LoginResponse } from '@src/types/loginTypes';
import { LOGINT_API } from '@src/constants/apiUrl';
import { PATH } from '@src/constants/urls';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { POPUP_DURATION } from '@src/constants/duration';
import { POPUP_MESSAGE } from '@src/constants/message';

export default function useLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (params: LoginRequest) => {
    return axios.post<LoginResponse>(LOGINT_API, params);
  };

  const onLoinSuccess = ({ data }: AxiosResponse<LoginResponse>) => {
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.login,
      duration: POPUP_DURATION.medium,
    });

    setAccessToken(data.accessToken);
    push(PATH.home.url);
  };

  const onLoinError = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        openAndDeletePopup({
          key: Date.now(),
          message: '로그인 인증 실패.',
          duration: POPUP_DURATION.medium,
        });
        break;
      default:
        openAndDeletePopup({
          key: Date.now(),
          message: '알 수 없는 이유로 로그인 실패.',
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
