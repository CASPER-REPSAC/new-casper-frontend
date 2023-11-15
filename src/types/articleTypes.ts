import { Block } from '@blocknote/core';

export interface OnePageOfArticleList {
  maxPageNum: number;
  articleList: ArticleData[];
}

export interface ArticleData {
  file: boolean;
  view: number;
  title: string;
  nickname: string;
  numOfComments: number;
  hide: boolean;
  createdAt: string;
  articleId: number;
}

export interface DefaultArticleDetail {
  articleId: number;
  userId: string;
  boardId: string;
  category: number;
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  title: string;
  hide: boolean;
  notice: boolean;
  view: number;
  file: boolean;
}

export interface ArticleDetail extends DefaultArticleDetail {
  content: string;
}

export interface ParsedArticleDetail extends DefaultArticleDetail {
  content: Block[];
}
