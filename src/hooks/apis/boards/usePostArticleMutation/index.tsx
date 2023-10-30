import { accessTokenState } from '@src/atoms/atoms';
import usePopup from '@src/hooks/usePopup';
import { PostReqData } from '@src/types/PostTypes';
import { POST_ARTICLE_API } from '@src/utils/apiUrl';
import { POPUP_MESSAGE, POPUP_DURATION } from '@src/utils/constants';
import { PATH } from '@src/utils/urls';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export default function usePostArticleMutation() {
  const { openAndDeletePopup } = usePopup();
  const { push } = useRouter();
  const accessToken = useRecoilValue(accessTokenState);
  const mutationFn = (params: PostReqData) =>
    axios.post(POST_ARTICLE_API, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  const onSuccess = () => {
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.succeedPost,
      duration: POPUP_DURATION.medium,
    });
    push(`${PATH.boards.notice.url}/list/1`);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}
