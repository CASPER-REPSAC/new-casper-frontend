import { accessTokenState } from '@src/atoms';
import usePopup from '@src/hooks/usePopup';
import { PostReqData } from '@src/types/PostTypes';
import { POST_ARTICLE_API } from '@src/utils/apiUrl';
import { POPUP_MESSAGE, POPUP_TIME } from '@src/utils/constants';
import { PATH } from '@src/utils/urls';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export default function usePostArticleMutation() {
  const { openAndDeletePopup } = usePopup();
  const { push } = useRouter();
  const accessToken = useRecoilValue(accessTokenState);
  const mutationFn = (params: PostReqData) => {
    return axios.post(POST_ARTICLE_API, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const onSuccess = () => {
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.succeedPost,
      time: POPUP_TIME.medium,
    });
    push(PATH.boards.notice.url);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}
