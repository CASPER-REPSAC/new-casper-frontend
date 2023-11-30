import { DELETE_ARTICLE_API } from 'app/_constants/apiUrl';
import { POPUP_DURATION } from 'app/_constants/duration';
import { POPUP_MESSAGE } from 'app/_constants/message';
import { BOARD_TYPE } from 'app/_constants/mock';
import { PATH } from 'app/_constants/urls';
import { usePopup } from 'app/_hooks';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

function useDeleteArticleMutation(id: string) {
  const { push, query } = useRouter();
  const { openAndDeletePopup } = usePopup();
  const mutationFn = () => {
    return axios.delete(`${DELETE_ARTICLE_API}/${id}`);
  };

  const onSuccess = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.deleteSuccess,
      duration: POPUP_DURATION.medium,
    });
    const { boardId } = query;
    switch (boardId) {
      case BOARD_TYPE.notice:
        push(`${PATH.boards.notice.url}/list/1`);
        break;
      case BOARD_TYPE.full:
        push(`${PATH.boards.full.url}/list/1`);
        break;
      case BOARD_TYPE.associate:
        push(`${PATH.boards.associate.url}/list/1`);
        break;
      case BOARD_TYPE.graduate:
        push(`${PATH.boards.graduate.url}/list/1`);
        break;
      default:
        push(`${PATH.boards.notice.url}/list/1`);
    }
  };

  const onError = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.failedToDelete,
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useDeleteArticleMutation;
