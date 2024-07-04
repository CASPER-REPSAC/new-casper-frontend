import { DELETE_ARTICLE_API } from '@app/_constants/apiUrl';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { PATH } from '@app/_constants/urls';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

function useDeleteArticleMutation(id: number) {
  const { push } = useRouter();
  const { toast } = useToast();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = () =>
    axios.delete(`/proxy${DELETE_ARTICLE_API}/${id}`, {
      headers: {
        Authorization: bearerToken,
      },
    });

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.deleteSuccess,
    });
    push(`${PATH.boards.notice.url}/list/1`);
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
    const code = error.response?.data.code;
    switch (code) {
      case -303:
        toast({
          variant: 'destructive',
          title: TOAST_TITLE.error,
          description: ERROR_MESSAGE['-303'],
        });
        break;
      default:
        toast({
          variant: 'destructive',
          title: TOAST_TITLE.error,
          description: ERROR_MESSAGE.unknown,
        });
    }
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useDeleteArticleMutation;
