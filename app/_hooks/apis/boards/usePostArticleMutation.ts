import boardService from '@app/_service/boardService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { NEW_PATH, PATH } from '@app/_constants/urls';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { boardQueryKey } from '../queryKey';

export default function usePostArticleMutation() {
  const { toast } = useToast();
  const { push } = useRouter();
  const { boardType } = useParams<{ boardType: string }>();
  const queryClient = useQueryClient();

  const mutationFn = ({ files, uploadedFiles, ...rest }: CreateArticleForm) =>
    boardService.createArticle({
      urls: uploadedFiles.map(({ url }) => url),
      ...rest,
    });

  const onSuccess = async () => {
    toast({
      description: POPUP_MESSAGE.postSuccess,
    });
    const boardListPath = NEW_PATH.boardList.url({
      boardType,
      category: 'all',
      page: 1,
    });

    queryClient.invalidateQueries({
      queryKey: boardQueryKey.list({ boardType }),
    });
    push(boardListPath);
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
