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
