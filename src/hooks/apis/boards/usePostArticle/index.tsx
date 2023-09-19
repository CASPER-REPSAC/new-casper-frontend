import { accessTokenState } from '@src/atoms';
import { PostReqData } from '@src/types/PostTypes';
import { POST_ARTICLE_API } from '@src/utils/apiUrl';
import { PATH } from '@src/utils/urls';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export default function usePostArticle() {
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
    push(PATH.boards.notice.url);
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}
