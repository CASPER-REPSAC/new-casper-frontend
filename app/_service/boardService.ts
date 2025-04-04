import { CreateArticleRequest, UpdateReqData } from '@app/_types/PostTypes';
import {
  ArticleData,
  ArticleDetail,
  CommentResponse,
} from '@app/_types/boardTypes';
import { Pagination } from '@app/_types/common';
import Service from './service';

class BoardService extends Service {
  async createArticle(data: CreateArticleRequest) {
    this.axiosExtend.post('/api/article/write', data);
  }

  async downloadFile({ url, name }: { url: string; name: string }) {
    const { data } = await this.axiosExtend.get<Blob>(url, {
      responseType: 'blob',
    });

    const blobUrl = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = name;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  async getComments(articleId: number) {
    const { data } = await this.axiosExtend.get<CommentResponse[]>(
      `/api/article/${articleId}/comment`,
    );
    return data;
  }

  async deleteComment({
    articleId,
    commentId,
  }: {
    articleId: number;
    commentId: number;
  }) {
    this.axiosExtend.delete(`/api/article/${articleId}/comment/${commentId}`);
  }

  async updateComment({
    articleId,
    commentId,
    text,
  }: {
    articleId: number;
    commentId: number;
    text: string;
  }) {
    this.axiosExtend.patch(`/api/article/${articleId}/comment/${commentId}`, {
      text,
    });
  }

  async createComment({
    articleId,
    text,
  }: {
    articleId: number;
    text: string;
  }) {
    this.axiosExtend.post(`/api/article/${articleId}/comment`, { text });
  }

  async downloadFiles(urls: string[]) {
    const blobPromiseList = urls.map(async (url) => {
      const { data } = await this.axiosExtend.get<Blob>(url, {
        responseType: 'blob',
      });
      return data;
    });

    const blobs = await Promise.all(blobPromiseList);
    return blobs;
  }

  async getArticleList({
    page,
    boardType,
    category = 'all',
  }: {
    boardType: string;
    page: number;
    category?: string;
  }) {
    const { data } = await this.axiosExtend.get<Pagination<ArticleData>>(
      `/api/article/${boardType}/${category}/${page}`,
    );
    return data;
  }

  async getArticleDetail(id: number) {
    const { data } = await this.axiosExtend.get<ArticleDetail>(
      `/api/article/view/${id}`,
    );
    return data;
  }

  async deleteArticle(id: number) {
    const { data } = await this.axiosExtend.delete<ArticleDetail>(
      `/api/article/delete/${id}`,
    );
    return data;
  }

  async updateArticle({
    id,
    updateData,
  }: {
    id: number;
    updateData: UpdateReqData;
  }) {
    const { data } = await this.axiosExtend.patch(
      `/api/article/update/${id}`,
      updateData,
    );
    return data;
  }
}

const boardService = new BoardService();
export default boardService;
