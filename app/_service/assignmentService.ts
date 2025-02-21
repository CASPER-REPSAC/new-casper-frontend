import {
  Assignment,
  AssignmentDetail,
  SubmitDetail,
} from '@app/_types/assignment';
import Service from './service';

const BASE_PATH = '/api/assignment';

class AssignmentService extends Service {
  async createAssignment(data: {
    title: string;
    category: string;
    description: string;
    deadline: string;
    urls?: string[];
  }) {
    return this.axiosExtend.post(`${BASE_PATH}/create`, data);
  }

  async deleteAssignment(assignmentId: number) {
    return this.axiosExtend.delete(`${BASE_PATH}/delete/${assignmentId}`);
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
    const { data } = await this.axiosExtend.get<SubmitDetail>(
      `${BASE_PATH}/${assignmentId}/submit/${submitId}`,
    );
    return data;
  }

  async createSubmit(params: {
    assignmentId: number;
    content: string;
    urls?: string[];
  }) {
    await this.axiosExtend.post<{ submitId: number }>(
      `${BASE_PATH}/${params.assignmentId}/submit`,
      {
        content: params.content,
        urls: params.urls,
      },
    );
    return { submitId: 1 };
  }

  async updateSubmit(params: {
    assignmentId: number;
    submitId: number;
    content: string;
    urls?: string[];
  }) {
    await this.axiosExtend.patch(
      `${BASE_PATH}/${params.assignmentId}/edit/${params.submitId}`,
      {
        content: params.content,
        urls: params.urls,
      },
    );

    return { submitId: params.submitId };
  }

  async deleteSubmit(params: { assignmentId: number; submitId: number }) {
    await this.axiosExtend.delete(
      `${BASE_PATH}/${params.assignmentId}/delete/${params.submitId}`,
    );
  }

  async updateAssignment(params: {
    assignmentId: number;
    title: string;
    category: string;
    description: string;
    deadline: string;
    urls?: string[];
  }) {
    await this.axiosExtend.patch(
      `${BASE_PATH}/edit/${params.assignmentId}`,
      params,
    );
  }

  async updateAllScore(body: { submitId: number; score: number }[]) {
    await this.axiosExtend.post(`${BASE_PATH}/grade`, body);
  }

  async updateFeedback(body: {
    submitId: number;
    feedback: string;
    score: number;
  }) {
    await this.axiosExtend.post(`${BASE_PATH}/feedback`, body);
    return { submitId: body.submitId };
  }
}

const assignmentService = new AssignmentService();
export default assignmentService;
