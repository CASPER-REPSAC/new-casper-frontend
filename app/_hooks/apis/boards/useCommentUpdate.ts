import { TOAST_TITLE } from '@app/_constants/message';
import boardService from '@app/_service/boardService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { CommentModifyRequest } from '@app/_types/boardTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useCommentUpdate(articleId: number) {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const mutationFn = async ({ text, commentId }: CommentModifyRequest) => {
    await boardService.updateComment({ articleId, commentId, text });
  };

  const onSuccess = () => {
    toast({
      description: '댓글이 수정되었어요.',
    });
    queryClient.invalidateQueries({ queryKey: ['comment', articleId] });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: '댓글이 수정 실패했어요.',
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useCommentUpdate;
