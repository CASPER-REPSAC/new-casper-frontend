export interface ArticleData {
  article_id: number;
  title: string;
  file: boolean;
  numOfComments: number;
  nickname: string;
  created_at: string;
  view: number;
}

export interface ArticleDetail {
  articleId: number;
  userId: string;
  boardId: string;
  category: number;
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  title: string;
  content: string;
  hide: boolean;
  notice: boolean;
  view: number;
  file: boolean;
}
