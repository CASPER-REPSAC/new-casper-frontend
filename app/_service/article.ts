import {
  API_URL,
  ARTICLE_DETAIL_API,
  ARTICLE_LIST_API,
} from '@app/_constants/apiUrl';
import { ERROR_MESSAGE } from '@app/_constants/message';
import {
  ArticleDetail,
  CommentResponse,
  OnePageOfArticleList,
} from '@app/_types/boardTypes';
import CustomError, { ErrorResponse } from '@app/_types/errorTypes';
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
    const error: ErrorResponse = await res.json();
    if (error.code === -301) throw new Error(ERROR_MESSAGE[error.code]);
    throw new Error(ERROR_MESSAGE.unknown);
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
    const error: ErrorResponse = await res.json();
    throw new CustomError(error);
  }
  const data: OnePageOfArticleList = await res.json();
  return data;
}

export async function getCommentList(
  articleId: string,
): Promise<CommentResponse[]> {
  const res = await fetch(`${API_URL}/api/article/${articleId}/comment`);
  const data = await res.json();
  return data;
}
