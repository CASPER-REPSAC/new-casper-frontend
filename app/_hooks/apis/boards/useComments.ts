import boardService from '@app/_service/boardService';
import { useQuery } from '@tanstack/react-query';
import { commentQueryKey } from '../queryKey';

function useComments(articleId: number) {
  const queryKey = commentQueryKey.list(articleId);
  const queryFn = async () => boardService.getComments(articleId);

  return useQuery({
    queryKey,
    queryFn,
  });
}

export default useComments;
