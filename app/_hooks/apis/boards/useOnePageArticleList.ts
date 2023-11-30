import { API_URL, ARTICLE_LIST_API } from 'app/_constants/apiUrl';
import { OnePageOfArticleList } from '@src/types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  boardType: string;
  category?: string;
  page: string;
}

export async function getOnePageArticleList(
  { boardType, page, category = 'all' }: Props,
  fromServer: boolean = false,
) {
  const url = fromServer
    ? `${API_URL}${ARTICLE_LIST_API}/${boardType}/${category}/${page}`
    : `${ARTICLE_LIST_API}/${boardType}/${category}/${page}`;

  const { data } = await axios.get<OnePageOfArticleList>(url);
  return data;
}

function useOnePageArticleList(
  { boardType, page, category = 'all' }: Props,
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
