export interface PostReqData {
  boardId: string;
  category: string;
  createdAt: string;
  modifiedAt: string;
  file: boolean;
  hide: boolean;
  notice: boolean;
  nickname: string;
  title: string;
  content: string | null;
  photo: string;
}
