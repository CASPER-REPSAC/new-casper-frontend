import { POST_ARTICLE_API } from '@src/utils/apiUrl';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface PostReqData {
  title: string;
  content: string;
}

export default function usePostArticle() {
  const mutationFn = (params: PostReqData) =>
    axios.post(POST_ARTICLE_API, params);

  return useMutation({
    mutationFn,
  });
}
