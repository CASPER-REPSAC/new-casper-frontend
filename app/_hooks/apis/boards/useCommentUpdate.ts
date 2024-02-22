import { COMMENT_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { usePopup } from '@app/_hooks';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { CommentRequest } from '@app/_types/boardTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

function useCommentUpdate(articleId: string) {
  const { openAndDeletePopup } = usePopup();
  const bearerToken = useRecoilValue(bearerTokenState);

  const queryClient = useQueryClient();

  const mutationFn = (data: CommentRequest) =>
    axios.patch(
      `/proxy${COMMENT_API(articleId)}/${data.commentId}`,
      { text: data.text },
      {
        headers: { Authorization: bearerToken },
      },
    );

  const onSuccess = () => {
    openAndDeletePopup({
      message: '댓글이 수정되었어요.',
      duration: POPUP_DURATION.medium,
    });
    queryClient.invalidateQueries({ queryKey: ['comment', articleId] });
  };

  const onError = () => {
    openAndDeletePopup({
      message: '댓글이 수정 실패했어요.',
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useCommentUpdate;
