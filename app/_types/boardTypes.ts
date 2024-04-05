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
  file: boolean;
}

export type BoardType =
  | 'notice_board'
  | 'full_member_board'
  | 'associate_member_board'
  | 'graduate_member_board';

export interface BoardListParams extends Params {
  boardType: BoardType;
  page: string;
}

export interface CommentWriteRequest {
  text: string;
}

export interface CommentModifyRequest {
  text: string;
  commentId: string;
}
export interface CommentResponse {
  commentId: number;
  articleId: number;
  nickname: string;
  text: string;
  createdAt: string;
  modifiedAt: string;
}

export interface Category {
  boardNameKey: {
    boardName: string;
    subBoardName: string;
  };
}
