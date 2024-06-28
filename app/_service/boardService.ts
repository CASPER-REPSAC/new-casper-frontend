import { CreateArticleRequest } from '@app/_types/PostTypes';
import Service from './service';

class BoardService extends Service {
  async createArticle(data: CreateArticleRequest) {
    this.axiosExtend.post('/api/article/write', data);
  }
}

const boardService = new BoardService();
export default boardService;
