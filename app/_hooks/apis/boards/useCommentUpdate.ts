import { COMMENT_API } from '@app/_constants/apiUrl';
import { TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { CommentModifyRequest } from '@app/_types/boardTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

function useCommentUpdate(articleId: string) {
  const { toast } = useToast();
  const bearerToken = useRecoilValue(bearerTokenState);

  const queryClient = useQueryClient();

  const mutationFn = (data: CommentModifyRequest) =>
    axios.patch(
      `/proxy${COMMENT_API(articleId)}/${data.commentId}`,
      { text: data.text },
      {
        headers: { Authorization: bearerToken },
      },
    );

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
