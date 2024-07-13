import boardService from '@app/_service/boardService';
import { ArticleListParams } from '@app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';

export const articleListQueryOption = ({
  page,
  boardType,
  category,
}: ArticleListParams) => ({
  queryKey: ['article', 'list', boardType, category, page],
  queryFn: () => boardService.getArticleList({ boardType, category, page }),
});

function useArticleListQuery(params: ArticleListParams) {
  return useQuery(articleListQueryOption(params));
}

export default useArticleListQuery;
