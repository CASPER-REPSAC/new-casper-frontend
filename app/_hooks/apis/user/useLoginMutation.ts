import axios, { AxiosError, AxiosResponse } from 'axios';
import { accessTokenState, myProfileState } from '@app/_store/permissionAtoms';
import { LoginRequest, LoginResponse } from '@app/_types/loginTypes';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { ERROR_MESSAGE, POPUP_MESSAGE } from '@app/_constants/message';
import { LOGIN_API } from '@app/_constants/apiUrl';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useRouter } from 'next/navigation';
import { revalidateTag } from '@app/_actions';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

export default function useLoginMutation() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);
  const { push } = useRouter();
  const { toast } = useToast();

  const mutationFn = (params: LoginRequest) =>
    axios.post<LoginResponse>(`/proxy${LOGIN_API}`, params);

  const onLoinSuccess = async ({ data }: AxiosResponse<LoginResponse>) => {
    await revalidateTag('accessToken');
    toast({
      title: '로그인',
      description: POPUP_MESSAGE.loginSuccess,
    });
    push('/');
    setAccessToken(data.accessToken);
    setMyProfile(data.myInfo);
  };

  const onLoinError = (error: AxiosError<ErrorResponse>) => {
    const code = error.response?.data.code;
    switch (code) {
      case -101:
        toast({
          variant: 'destructive',
          title: '로그인',
          description: ERROR_MESSAGE['-101'],
        });
        break;
      case -102:
        toast({
          variant: 'destructive',
          title: '로그인',
          description: ERROR_MESSAGE['-102'],
        });
        break;
      default:
        toast({
          variant: 'destructive',
          title: '로그인',
          description: ERROR_MESSAGE.unknown,
        });
        break;
    }
  };

  return useMutation({
    mutationFn,
    onSuccess: onLoinSuccess,
    onError: onLoinError,
  });
}
