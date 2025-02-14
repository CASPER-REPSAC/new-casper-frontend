import { Assignment, AssignmentDetail } from '@app/_types/assignment';
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
      maxPage: number;
      assignments: Assignment[];
    }>(`${BASE_PATH}/list/${page}`);
    return data;
  }

  async getAssignmentDetail(id: number) {
    const { data } = await this.axiosExtend.get<AssignmentDetail>(
      `${BASE_PATH}/detail/${id}`,
    );
    return data;
  }

  async getSubmitList(assignmentId: number, submitId: number) {
    const { data } = await this.axiosExtend.get(
      `${BASE_PATH}/submit/${assignmentId}/submit/${submitId}`,
    );
    return data;
  }

  async getSubmitDetail(assignmentId: number, submitId: number) {
    const { data } = await this.axiosExtend.get(
      `${BASE_PATH}/${assignmentId}/submit/${submitId}`,
    );
    return data;
  }

  async createSubmit(params: {
    assignmentId: number;
    contents: string;
    urls?: string[];
  }) {
    await this.axiosExtend.post<{ submitId: number }>(
      `${BASE_PATH}/${params.assignmentId}/submit`,
      {
        contents: params.contents,
        urls: params.urls,
      },
    );
    return { submitId: 1 };
  }
}

const assignmentService = new AssignmentService();
export default assignmentService;
