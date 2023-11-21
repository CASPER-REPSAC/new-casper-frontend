import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import usePopup from '@src/hooks/usePopup';
import { PostReqData } from '@src/types/PostTypes';
import { accessTokenState } from '@src/recoil';
import { PATH } from '@src/constants/urls';
import { POST_ARTICLE_API } from '@src/constants/apiUrl';
import { POPUP_DURATION } from '@src/constants/duration';
import { ERROR_MESSAGE, POPUP_MESSAGE } from '@src/constants/message';

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

  const onError = (error: AxiosError) => {
    switch (error.response?.status) {
      case 400:
        openAndDeletePopup({
          message: ERROR_MESSAGE.unknown,
          duration: POPUP_DURATION.medium,
        });
        return;

      case 401:
        openAndDeletePopup({
          message: ERROR_MESSAGE.requiredLogin,
          duration: POPUP_DURATION.medium,
        });
        push(PATH.user.login.url);
        return;

      default:
        openAndDeletePopup({
          message: ERROR_MESSAGE.unknown,
          duration: POPUP_DURATION.medium,
        });
    }
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}
