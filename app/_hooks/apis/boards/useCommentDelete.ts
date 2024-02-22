import { COMMENT_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { usePopup } from '@app/_hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function useCommentDelete(articleId: string) {
  const { openAndDeletePopup } = usePopup();
  const queryClient = useQueryClient();

  const mutationFn = (commentId: string) =>
    axios.delete(`/proxy${COMMENT_API(articleId)}/${commentId}`);

  const onSuccess = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.deleteCommentSuccess,
      duration: POPUP_DURATION.medium,
    });
    queryClient.invalidateQueries({ queryKey: ['comment', articleId] });
  };

  const onError = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.failedToDeleteComment,
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useCommentDelete;
