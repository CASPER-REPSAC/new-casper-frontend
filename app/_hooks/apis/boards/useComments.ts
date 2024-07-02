import boardService from '@app/_service/boardService';
import { useQuery } from '@tanstack/react-query';

function useComments(articleId: number) {
  const queryKey = ['comment', articleId];
  const queryFn = async () => boardService.getComments(articleId);

  return useQuery({
    queryKey,
    queryFn,
  });
}

export default useComments;
