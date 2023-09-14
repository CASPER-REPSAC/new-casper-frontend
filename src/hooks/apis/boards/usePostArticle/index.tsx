import { accessTokenState } from '@src/atoms';
import { POST_ARTICLE_API } from '@src/utils/apiUrl';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

interface PostReqData {
  title: string;
  content: string;
}

export default function usePostArticle() {
  const accessToken = useRecoilValue(accessTokenState);
  const mutationFn = (params: PostReqData) => {
    return axios.post(POST_ARTICLE_API, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return useMutation({
    mutationFn,
  });
}
