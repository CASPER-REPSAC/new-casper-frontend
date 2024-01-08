import {
  API_URL,
  ARTICLE_DETAIL_API,
  ARTICLE_LIST_API,
} from '@app/_constants/apiUrl';
import { ArticleDetail, OnePageOfArticleList } from '@app/_types/boardTypes';
import { getBearerToken } from '@app/_utils/cookie';

export async function getArticleDetail(articleId: string) {
  const url = `${API_URL}${ARTICLE_DETAIL_API}/${articleId}`;
  const bearerToken = getBearerToken();

  const res = await fetch(url, {
    headers: {
      Authorization: bearerToken,
    },
    next: {
      tags: ['accessToken'],
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: ArticleDetail = await res.json();

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
    headers: {
      Authorization: bearerToken,
    },
    next: {
      tags: ['accessToken'],
    },
  });

  if (!res.ok) {
    console.log('?', res.status);
    throw Error('failed to fetch');
  }
  const data: OnePageOfArticleList = await res.json();
  return data;
}
