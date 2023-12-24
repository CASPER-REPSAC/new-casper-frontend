import {
  API_URL,
  ARTICLE_DETAIL_API,
  ARTICLE_LIST_API,
} from 'app/_constants/apiUrl';
import { ArticleDetail, OnePageOfArticleList } from 'app/_types/boardTypes';
import { getAccessToken, getBearerToken } from 'app/_utils/cookie';
import axios from 'axios';

export async function getArticleDetail(articleId: string) {
  const url = `${API_URL}${ARTICLE_DETAIL_API}/${articleId}`;
  const accessToken = getAccessToken();

  const { data } = await axios.get<ArticleDetail>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}

export async function getOnePageArticleList({
  boardType,
  page,
  category = 'all',
}: {
  boardType: string;
  page: string;
  category?: string;
}) {
  const bearerToken = getBearerToken();
  const url = `${API_URL}${ARTICLE_LIST_API}/${boardType}/${category}/${page}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: bearerToken,
    },
    next: {
      tags: ['accessToken'],
    },
  });

  if (!res.ok) throw Error('Failed to fetch data');
  const data: OnePageOfArticleList = await res.json();

  return data;
}
