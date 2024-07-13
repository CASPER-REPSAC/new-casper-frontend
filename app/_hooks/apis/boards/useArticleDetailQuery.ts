import boardService from '@app/_service/boardService';
import { useQuery } from '@tanstack/react-query';

export const articleDeatilQueryOption = (id: number) => ({
  queryKey: ['article', 'detail', id],
  queryFn: () => boardService.getArticleDetail(id),
});

function useArticleDetailQuery(id: number) {
  return useQuery(articleDeatilQueryOption(id));
}

export default useArticleDetailQuery;
