import { ArticleDetail } from '@src/types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import { API_URL, ARTICLE_DETAIL_API } from 'app/_constants/apiUrl';
import axios from 'axios';

export async function getArticleDetail(
  articleId: string,
  fromServer: boolean = false,
) {
  const url = fromServer
    ? `${API_URL}${ARTICLE_DETAIL_API}/${articleId}`
    : `${ARTICLE_DETAIL_API}/${articleId}`;

  const { data } = await axios.get<ArticleDetail>(url);
  return data;
}

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
