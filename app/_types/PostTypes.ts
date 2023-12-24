export interface PostReqData {
  boardId: string;
  category: string;
  file: boolean;
  hide: boolean;
  notice: boolean;
  title: string;
  content: string;
  photo: string;
}

export interface UpdateReqData {
  articleId: string;
  title: string;
  content: string;
}
