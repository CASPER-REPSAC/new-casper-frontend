import { revalidateTag } from '@app/_actions';
import { ERROR_MESSAGE } from '@app/_constants/message';
import { PATH } from '@app/_constants/urls';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { accessTokenState, myProfileState } from '@app/_store/permissionAtoms';
import { ErrorResponse } from '@app/_types/errorTypes';
import { LoginResponse } from '@app/_types/loginTypes';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

function useOnLogin() {
  const { toast } = useToast();
  const { push } = useRouter();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);

  const onSuccess = async ({ data }: AxiosResponse<LoginResponse>) => {
    await revalidateTag('accessToken');
    setAccessToken(data.accessToken);
    setMyProfile(data.myInfo);
    push(PATH.home.url);
    toast({ title: '로그인', description: '로그인 성공했어요' });
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
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

  return {
    onSuccess,
    onError,
  };
}

export default useOnLogin;
