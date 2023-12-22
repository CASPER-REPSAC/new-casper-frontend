import {
  API_URL,
  ARTICLE_DETAIL_API,
  ARTICLE_LIST_API,
} from 'app/_constants/apiUrl';
import { ArticleDetail, OnePageOfArticleList } from 'app/_types/boardTypes';
import { getAccessToken } from 'app/_utils/cookie';
import axios from 'axios';

export async function getArticleDetail(
  articleId: string,
  proxy: boolean = false,
) {
  const accessToken = getAccessToken();
  const url = proxy
    ? `/proxy${ARTICLE_DETAIL_API}/${articleId}`
    : `${API_URL}${ARTICLE_DETAIL_API}/${articleId}`;

  const { data } = await axios.get<ArticleDetail>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}

export async function getOnePageArticleList(
  {
    boardType,
    page,
    category = 'all',
  }: { boardType: string; page: string; category?: string },
  proxy: boolean = false,
) {
  const accessToken = getAccessToken();
  const url = proxy
    ? `/proxy${ARTICLE_LIST_API}/${boardType}/${category}/${page}`
    : `${API_URL}${ARTICLE_LIST_API}/${boardType}/${category}/${page}`;

  const { data } = await axios.get<OnePageOfArticleList>(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}
