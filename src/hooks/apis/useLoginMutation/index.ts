import { accessTokenState, loginState } from '@src/atoms';
import usePopup from '@src/hooks/usePopup';
import { LOGINT_API } from '@src/utils/apiUrl';
import { PATH } from '@src/utils/urls';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

export interface LoginRequest {
  id: string;
  pw: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export default function useLoginMutation() {
  const setLogin = useSetRecoilState(loginState);
  const setAccessToken = useSetRecoilState(accessTokenState);
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (params: LoginRequest) => {
    return axios.post<LoginResponse>(LOGINT_API, params);
  };

  const onLoinSuccess = ({ data }: AxiosResponse<LoginResponse>) => {
    openAndDeletePopup({
      key: Date.now(),
      message: '로그인 성공!',
      time: 3000,
    });

    setAccessToken(data.accessToken);
    setLogin(true);
    axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    push(PATH.home.url);
  };

  const onLoinError = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        openAndDeletePopup({
          key: Date.now(),
          message: '로그인 인증 실패.',
          time: 3000,
        });
        break;
      default:
        openAndDeletePopup({
          key: Date.now(),
          message: '알 수 없는 이유로 로그인 실패.',
          time: 3000,
        });
    }
  };

  return useMutation({
    mutationFn,
    onSuccess: onLoinSuccess,
    onError: onLoinError,
  });
}