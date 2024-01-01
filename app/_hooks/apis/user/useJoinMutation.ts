import { JoinReqData, JoinResData } from '@app/_types/joinTypes';
import { JOIN_API } from '@app/_constants/apiUrl';
import { PATH } from '@app/_constants/urls';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import { usePopup } from '@app/_hooks';

function useJoinMutation() {
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (params: JoinReqData) =>
    axios.post(`/proxy${JOIN_API}`, params);
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
