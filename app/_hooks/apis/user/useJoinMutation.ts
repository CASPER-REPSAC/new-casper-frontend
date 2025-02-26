import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { JOIN_API } from '@app/_constants/apiUrl';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { PATH } from '@app/_constants/urls';
import { JoinRequest, JoinResponse } from '@app/_types/joinTypes';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useJoinMutation() {
  const { push } = useRouter();
  const { toast } = useToast();

  const mutationFn = (params: JoinRequest) =>
    axios.post(`/proxy${JOIN_API}`, params);

  const onSuccess = (data: AxiosResponse<JoinResponse>) => {
    const { status } = data;
    if (status < 200 || status >= 300) {
      return;
    }
    toast({
      description: POPUP_MESSAGE.joinSuccess,
    });
    push(PATH.user.login.url);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}

export default useJoinMutation;
