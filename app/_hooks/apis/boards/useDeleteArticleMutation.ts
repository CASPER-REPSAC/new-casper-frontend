import boardService from '@app/_service/boardService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { NEW_PATH } from '@app/_constants/urls';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { boardQueryKey } from '../queryKey';

function useDeleteArticleMutation(id: number) {
  const { push } = useRouter();
  const { toast } = useToast();
  const { boardType } = useParams<{ boardType: string }>();
  const queryClient = useQueryClient();

  const mutationFn = () => boardService.deleteArticle(id);

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.deleteSuccess,
    });
    queryClient.invalidateQueries({
      queryKey: boardQueryKey.list({ boardType }),
    });
    push(NEW_PATH.boardList.url({ boardType, category: 'all', page: 1 }));
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
