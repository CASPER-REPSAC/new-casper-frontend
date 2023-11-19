export interface PostReqData {
  boardId: string;
  category: string;
  createdAt: string;
  modifiedAt: string;
  file: boolean;
  hide: boolean;
  notice: boolean;
  title: string;
  content: string | null;
  photo: string;
}

export interface UpdateReqData {
  title: string;
  content: string;
}
