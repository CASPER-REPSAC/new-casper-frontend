import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AutoLoginResponse } from '@src/types/loginTypes';
import usePopup from '@src/hooks/usePopup';
import { PATH } from '@src/utils/urls';
import { POPUP_DURATION, POPUP_MESSAGE } from '@src/utils/constants';
import { AUTO_LOGIN_API } from '@src/utils/apiUrl';
import { accessTokenState } from '@src/atoms';

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
        openAndDeletePopup({
          key: Date.now(),
          message: '알 수 없다..',
          duration: POPUP_DURATION.medium,
        });
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