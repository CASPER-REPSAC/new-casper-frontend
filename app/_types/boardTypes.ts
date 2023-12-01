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

export interface BoardListParams {
  boardType: BoardType;
  page: string;
}
