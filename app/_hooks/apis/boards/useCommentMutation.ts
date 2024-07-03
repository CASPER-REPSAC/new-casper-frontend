import { ERROR_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import boardService from '@app/_service/boardService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { CommentWriteRequest } from '@app/_types/boardTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useCommentMutation(articleId: number) {
  const queryCache = useQueryClient();
  const { toast } = useToast();

  const mutationFn = ({ text }: CommentWriteRequest) =>
    boardService.createComment({ articleId, text });

  const onSuccess = () => {
    toast({
      description: '댓글이 작성 되었어요.',
    });
    queryCache.invalidateQueries({ queryKey: ['comment', articleId] });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: ERROR_MESSAGE.unknown,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useCommentMutation;
