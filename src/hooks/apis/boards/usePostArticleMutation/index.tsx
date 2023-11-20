import { accessTokenState } from '@src/recoil';
import usePopup from '@src/hooks/usePopup';
import { PostReqData } from '@src/types/PostTypes';
import { POST_ARTICLE_API } from '@src/constants/apiUrl';
import { PATH } from '@src/constants/urls';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { POPUP_DURATION } from '@src/constants/duration';
import { POPUP_MESSAGE } from '@src/constants/message';

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
      message: POPUP_MESSAGE.postSuccess,
      duration: POPUP_DURATION.medium,
    });
    push(`${PATH.boards.notice.url}/list/1`);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}
