import boardService from '@app/_service/boardService';
import { useQuery } from '@tanstack/react-query';
import { boardQueryKey } from '../queryKey';

export const articleDeatilQueryOption = (id: number) => ({
  queryKey: boardQueryKey.detail(id),
  queryFn: () => boardService.getArticleDetail(id),
});

function useArticleDetailQuery(id: number) {
  return useQuery(articleDeatilQueryOption(id));
}

export default useArticleDetailQuery;
