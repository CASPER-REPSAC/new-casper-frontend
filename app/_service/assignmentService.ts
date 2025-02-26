import {
  Assignment,
  AssignmentDetail,
  SubmitDetail,
} from '@app/_types/assignment';
import Service from './service';

class AssignmentService extends Service {
  async createAssignment(data: {
    title: string;
    category: string;
    description: string;
    deadline: string;
    urls?: string[];
  }) {
    return this.axiosExtend.post(`/api/assignment/create`, data);
  }

  async deleteAssignment(assignmentId: number) {
    return this.axiosExtend.delete(`/api/assignment/delete/${assignmentId}`);
  }

  async getAssignmentList(page: number) {
    const { data } = await this.axiosExtend.get<{
      maxPage: number;
      assignments: Assignment[];
    }>(`/api/assignment/list/${page}`);
    return data;
  }

  async getAssignmentDetail(id: number) {
    const { data } = await this.axiosExtend.get<AssignmentDetail>(
      `/api/assignment/detail/${id}`,
    );
    return data;
  }

  async getSubmitList(assignmentId: number, submitId: number) {
    const { data } = await this.axiosExtend.get(
      `/api/assignment/submit/${assignmentId}/submit/${submitId}`,
    );
    return data;
  }

  async getSubmitDetail(assignmentId: number, submitId: number) {
    const { data } = await this.axiosExtend.get<SubmitDetail>(
      `/api/assignment/${assignmentId}/submit/${submitId}`,
    );
    return data;
  }

  async createSubmit(params: {
    assignmentId: number;
    content: string;
    urls?: string[];
  }) {
    await this.axiosExtend.post<{ submitId: number }>(
      `/api/assignment/${params.assignmentId}/submit`,
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
      `/api/assignment/${params.assignmentId}/edit/${params.submitId}`,
      {
        content: params.content,
        urls: params.urls,
      },
    );

    return { submitId: params.submitId };
  }

  async deleteSubmit(params: { assignmentId: number; submitId: number }) {
    await this.axiosExtend.delete(
      `/api/assignment/${params.assignmentId}/delete/${params.submitId}`,
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
      `/api/assignment/edit/${params.assignmentId}`,
      params,
    );
  }

  async updateAllScore(body: { submitId: number; score: number }[]) {
    await this.axiosExtend.post(`/api/assignment/grade`, body);
  }

  async updateFeedback(body: {
    submitId: number;
    feedback: string;
    score: number;
  }) {
    await this.axiosExtend.post(`/api/assignment/feedback`, body);
    return { submitId: body.submitId };
  }
}

const assignmentService = new AssignmentService();
export default assignmentService;
