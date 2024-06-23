import { BoardType } from './boardTypes';

export interface CreateArticleForm {
  boardId: BoardType;
  category: string;
  hide: boolean;
  notice: boolean;
  title: string;
  content: string;
  photo: string;
  files?: FileList;
  fileUrls: string[];
}

export interface CreateArticleRequest {
  boardId: BoardType;
  category: string;
  hide: boolean;
  notice: boolean;
  title: string;
  content: string;
  urls: string[];
}

export interface UpdateReqData {
  articleId: string;
  title: string;
  content: string;
}
