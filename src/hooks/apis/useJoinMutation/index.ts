import { JoinReqData, JoinResData } from '@src/types/joinTypes';
import { JOIN_API } from '@src/utils/apiUrl';
import { PATH } from '@src/utils/urls';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

function useJoinMutation() {
  const { push } = useRouter();

  const mutationFn = (params: JoinReqData) => axios.post(JOIN_API, params);
  const onSuccess = (data: AxiosResponse<JoinResData>) => {
    const { status } = data;
    if (status < 200 || status >= 300) {
      return;
    }

    push(PATH.user.login.url);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}

export default useJoinMutation;
