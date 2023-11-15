import { DELETE_ARTICLE_API } from '@src/constants/apiUrl';
import { POPUP_DURATION } from '@src/constants/duration';
import { POPUP_MESSAGE } from '@src/constants/message';
import { BOARD_TYPE } from '@src/constants/mock';
import { PATH } from '@src/constants/urls';
import usePopup from '@src/hooks/usePopup';
import { ParsedArticleDetail } from '@src/types/articleTypes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

function useDeleteArticleMutation(article: ParsedArticleDetail | null) {
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();
  const mutationFn = () => {
    return axios.delete(`${DELETE_ARTICLE_API}/${article?.articleId}`);
  };

  const onSuccess = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.deleteSuccess,
      duration: POPUP_DURATION.medium,
    });

    switch (article?.boardId) {
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
