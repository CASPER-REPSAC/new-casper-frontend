import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { NEW_PATH, PATH } from '@app/_constants/urls';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import boardService from '@app/_service/boardService';
import { BoardListParams } from '@app/_types/boardTypes';
import { articleListQueryOption } from './useArticleListQuery';

export default function usePostArticleMutation() {
  const { toast } = useToast();
  const { push } = useRouter();
  const { boardType, category, page } = useParams<BoardListParams>();
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
    const { queryKey } = articleListQueryOption({
      boardType,
      category,
      page: Number(page),
    });
    queryClient.invalidateQueries({ queryKey: queryKey.slice(0, 3) });
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
