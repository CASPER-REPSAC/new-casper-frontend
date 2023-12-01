import { OnePageOfArticleList } from 'app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import { getOnePageArticleList } from 'app/_service/article';

function useOnePageArticleList(
  {
    boardType,
    page,
    category = 'all',
  }: { boardType: string; page: string; category?: string },
  initialData?: OnePageOfArticleList,
) {
  const queryKey = ['onePageArticleList', boardType, page];

  const queryFn = async () => {
    const data = await getOnePageArticleList({ boardType, page, category });
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}

export default useOnePageArticleList;
