import { ArticleDetail } from '@src/types/articleTypes';
import { ARTICLE_DETAIL_API } from '@src/constants/apiUrl';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useArticleDetail() {
  const queryKey = ['articleDetail'];
  const queryFn = () => {
    axios.get<ArticleDetail>(ARTICLE_DETAIL_API);
  };

  return useQuery({
    queryKey,
    queryFn,
  });
}

export default useArticleDetail;
