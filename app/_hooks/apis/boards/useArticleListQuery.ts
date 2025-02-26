import boardService from '@app/_service/boardService';
import { useQuery } from '@tanstack/react-query';
import { ArticleListParams } from '@app/_types/boardTypes';
import { boardQueryKey } from '../queryKey';

export const articleListQueryOption = ({
  page,
  boardType,
  category,
}: ArticleListParams) => ({
  queryKey: boardQueryKey.list({ boardType, category, page }),
  queryFn: () => boardService.getArticleList({ boardType, category, page }),
});

function useArticleListQuery(params: ArticleListParams) {
  return useQuery(articleListQueryOption(params));
}

export default useArticleListQuery;
