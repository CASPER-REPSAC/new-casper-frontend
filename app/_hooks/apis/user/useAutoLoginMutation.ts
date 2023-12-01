import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AutoLoginResponse } from 'app/_types/loginTypes';
import { usePopup } from 'app/_hooks';
import { PATH } from 'app/_constants/urls';
import { AUTO_LOGIN_API } from 'app/_constants/apiUrl';
import { accessTokenState, myProfileState } from 'app/_store/permissionAtoms';
import { ERROR_MESSAGE } from 'app/_constants/message';
import { POPUP_DURATION } from 'app/_constants/duration';

function useAutoLoginMutation() {
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const mutationFn = () => {
    return axios.post<AutoLoginResponse>(AUTO_LOGIN_API);
  };

  const onSuccess = ({ data }: AxiosResponse<AutoLoginResponse>) => {
    setAccessToken(data.accessToken);
    setMyProfile(data.myInfo);
  };

  const onError = (error: AxiosError) => {
    switch (error.response?.status) {
      case 403:
        push(PATH.user.login.url);
        openAndDeletePopup({
          message: ERROR_MESSAGE.unknown,
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
