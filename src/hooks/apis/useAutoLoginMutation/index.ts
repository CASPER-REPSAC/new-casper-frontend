import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AutoLoginResponse } from '@src/types/loginTypes';
import usePopup from '@src/hooks/usePopup';
import { PATH } from '@src/constants/urls';
import { AUTO_LOGIN_API } from '@src/constants/apiUrl';
import { accessTokenState } from '@src/atoms';
import { POPUP_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';

function useAutoLoginMutation() {
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const mutationFn = () => {
    return axios.post<AutoLoginResponse>(AUTO_LOGIN_API);
  };

  const onSuccess = ({ data }: AxiosResponse<AutoLoginResponse>) => {
    setAccessToken(data.accessToken);
  };

  const onError = (error: AxiosError) => {
    switch (error.response?.status) {
      case 403:
        push(PATH.user.login.url);
        openAndDeletePopup({
          key: Date.now(),
          message: POPUP_MESSAGE.logout,
          duration: POPUP_DURATION.medium,
        });
        break;
      default:
        break;
    }
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useAutoLoginMutation;
