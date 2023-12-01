import { ArticleDetail } from 'app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from 'app/_service/article';

function useArticleDetail(articleId: string, initialData?: ArticleDetail) {
  const queryKey = ['articleDetail', articleId];
  const queryFn = async () => {
    const data = await getArticleDetail(articleId);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}

export default useArticleDetail;
