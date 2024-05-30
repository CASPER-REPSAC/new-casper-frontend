import { CommentResponse } from '@app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useComments(articleId: string) {
  const queryKey = ['comment', articleId];
  const queryFn = async () => {
    const { data } = await axios.get<CommentResponse[]>(
      `/proxy/api/article/${articleId}/comment`,
    );
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
}

export default useComments;
