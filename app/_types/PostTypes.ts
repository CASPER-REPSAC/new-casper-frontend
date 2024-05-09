export interface PostReqData {
  boardId: string;
  category: string;
  hide: boolean;
  notice: boolean;
  title: string;
  content: string;
  photo: string;
  files?: File[];
}

export interface UpdateReqData {
  articleId: string;
  title: string;
  content: string;
}
