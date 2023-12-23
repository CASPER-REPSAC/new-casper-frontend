import { ArticleDetail } from 'app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from 'app/_service/article';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from 'app/_store/permissionAtoms';

function useArticleDetail(articleId: string, initialData?: ArticleDetail) {
  const queryKey = ['articleDetail', articleId];
  const accessToken = useRecoilValue(accessTokenState);
  const queryFn = async () => {
    const data = await getArticleDetail(articleId, accessToken, true);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}

export default useArticleDetail;
