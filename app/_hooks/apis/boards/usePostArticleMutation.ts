import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { NEW_PATH, PATH } from '@app/_constants/urls';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import boardService from '@app/_service/boardService';
import { BoardType } from '@app/_types/boardTypes';

export default function usePostArticleMutation() {
  const { toast } = useToast();
  const { push } = useRouter();
  const { boardType } = useParams<{ boardType: BoardType }>();

  const mutationFn = ({ files, fileUrls, ...rest }: CreateArticleForm) =>
    boardService.createArticle({
      urls: fileUrls,
      ...rest,
    });

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.postSuccess,
    });
    push(NEW_PATH.boardList.url({ boardType, page: 1 }));
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
