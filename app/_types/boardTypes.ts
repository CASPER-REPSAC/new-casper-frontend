import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

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

export interface ArticleDetail {
  article: {
    articleId: number;
    userId: string;
    boardId: string;
    category: number;
    createdAt: string;
    modifiedAt: string;
    content: string;
    nickname: string;
    title: string;
    hide: boolean;
    notice: boolean;
    view: number;
    profile: string;
    introduce: string;
  };

  files: { name: string; src: string }[];
}

export type BoardType =
  | 'notice_board'
  | 'full_board'
  | 'associate_board'
  | 'graduate_board'
  | 'freedom_board';

export interface BoardListParams extends Params {
  boardType: BoardType;
  page: string;
}

export interface BoardDetailParams extends Params {
  boardType: BoardType;
  articleId: string;
}

export interface CommentWriteRequest {
  text: string;
}

export interface CommentModifyRequest {
  text: string;
  commentId: number;
}
export interface CommentResponse {
  commentId: number;
  articleId: number;
  nickname: string;
  text: string;
  createdAt: string;
  modifiedAt: string;
  profile: string;
}

export interface Category {
  categories: string[];
}
