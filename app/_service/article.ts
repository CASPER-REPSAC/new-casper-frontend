import {
  API_URL,
  ARTICLE_DETAIL_API,
  ARTICLE_LIST_API,
} from 'app/_constants/apiUrl';
import { ArticleDetail, OnePageOfArticleList } from 'app/_types/boardTypes';
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

export async function getOnePageArticleList(
  {
    boardType,
    page,
    category = 'all',
  }: { boardType: string; page: string; category?: string },
  fromServer: boolean = false,
) {
  const url = fromServer
    ? `${API_URL}${ARTICLE_LIST_API}/${boardType}/${category}/${page}`
    : `${ARTICLE_LIST_API}/${boardType}/${category}/${page}`;

  const { data } = await axios.get<OnePageOfArticleList>(url);
  return data;
}