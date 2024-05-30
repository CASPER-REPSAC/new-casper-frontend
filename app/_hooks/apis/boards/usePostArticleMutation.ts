import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { PostReqData } from '@app/_types/PostTypes';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { PATH } from '@app/_constants/urls';
import { POST_ARTICLE_API } from '@app/_constants/apiUrl';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

export default function usePostArticleMutation() {
  const { toast } = useToast();
  const { push } = useRouter();
  const accessToken = useRecoilValue(accessTokenState);

  const mutationFn = ({ files, ...createArticleDto }: PostReqData) => {
    const formData = new FormData();
    const createArticleDtoBlob = new Blob([JSON.stringify(createArticleDto)], {
      type: 'application/json',
    });

    files?.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('createArticleDto', createArticleDtoBlob);

    return axios.postForm(`/proxy${POST_ARTICLE_API}`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.postSuccess,
    });
    push(`${PATH.boards.notice.url}/list/1`);
  };

  const onError = (error: AxiosError) => {
    switch (error.response?.status) {
      case 400:
        toast({
          variant: 'destructive',
          title: TOAST_TITLE.error,
          description: ERROR_MESSAGE.unknown,
        });
        return;

      case 401:
        toast({
          variant: 'destructive',
          title: TOAST_TITLE.error,
          description: ERROR_MESSAGE.unknown,
        });
        push(PATH.user.login.url);
        return;

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
