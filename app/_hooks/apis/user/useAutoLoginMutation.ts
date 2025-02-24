import { useMutation } from '@tanstack/react-query';
import { AUTO_LOGIN_API } from '@app/_constants/apiUrl';
import { ERROR_MESSAGE, POPUP_MESSAGE } from '@app/_constants/message';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { ErrorResponse } from '@app/_types/errorTypes';
import { AutoLoginResponse } from '@app/_types/loginTypes';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';
import { revalidateTag } from '@app/_actions';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useAutoLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const { toast } = useToast();

  const mutationFn = () =>
    axios.post<AutoLoginResponse>(`/proxy${AUTO_LOGIN_API}`);

  const onSuccess = async ({ data }: AxiosResponse<AutoLoginResponse>) => {
    await revalidateTag('accessToken');
    setAccessToken(data.accessToken);
    toast({
      title: '로그인',
      description: POPUP_MESSAGE.autoLoginSuccess,
    });
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    const code = response?.data.code;

    switch (code) {
      case -103:
        toast({
          variant: 'destructive',
          title: '로그인',
          description: ERROR_MESSAGE['-103'],
        });
        break;
      case -104:
        break;
      default:
        // openAndDeletePopup({
        //   message: ERROR_MESSAGE.unknown,
        //   duration: POPUP_DURATION.medium,
        // });
        break;
    }
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useAutoLoginMutation;
