import { JoinReqData, JoinResData } from '@src/types/joinTypes';
import { JOIN_API } from '@src/constants/apiUrl';
import { PATH } from '@src/constants/urls';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { POPUP_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import { usePopup } from '@src/hooks';

function useJoinMutation() {
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (params: JoinReqData) => axios.post(JOIN_API, params);
  const onSuccess = (data: AxiosResponse<JoinResData>) => {
    const { status } = data;
    if (status < 200 || status >= 300) {
      return;
    }

    openAndDeletePopup({
      message: POPUP_MESSAGE.joinSuccess,
      duration: POPUP_DURATION.medium,
    });
    push(PATH.user.login.url);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}

export default useJoinMutation;
