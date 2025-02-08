import { Assignment } from '@app/_types/assignment';
import Service from './service';

const BASE_PATH = '/api/assignment';

class AssignmentService extends Service {
  createAssignment(data: {
    title: string;
    category: string;
    description: string;
    deadline: string;
    urls?: string[];
  }) {
    this.axiosExtend.post(`${BASE_PATH}/create`, data);
  }

  async getAssignmentList(page: number) {
    const { data } = await this.axiosExtend.get<{
      maxPageNum: number;
      AssignmentList: Assignment[];
    }>(`${BASE_PATH}/list/${page}`);
    return data;
  }
}

const assignmentService = new AssignmentService();
export default assignmentService;
