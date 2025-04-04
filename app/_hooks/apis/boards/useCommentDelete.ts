import boardService from '@app/_service/boardService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { commentQueryKey } from '../queryKey';

function useCommentDelete(articleId: number) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = async (commentId: number) => {
    await boardService.deleteComment({ articleId, commentId });
  };
  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.deleteCommentSuccess,
    });
    queryClient.invalidateQueries({
      queryKey: commentQueryKey.list(articleId),
    });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: POPUP_MESSAGE.failedToDeleteComment,
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useCommentDelete;
