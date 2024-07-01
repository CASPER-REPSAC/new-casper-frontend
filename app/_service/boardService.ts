import { CreateArticleRequest } from '@app/_types/PostTypes';
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
}

const boardService = new BoardService();
export default boardService;
