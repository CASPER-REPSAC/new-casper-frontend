import { COMMENT_API } from '@app/_constants/apiUrl';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function useCommentDelete(articleId: string) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = (commentId: string) =>
    axios.delete(`/proxy${COMMENT_API(articleId)}/${commentId}`);

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.deleteCommentSuccess,
    });
    queryClient.invalidateQueries({ queryKey: ['comment', articleId] });
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
