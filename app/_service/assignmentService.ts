import Service from './service';

class AssignmentService extends Service {
  createAssignment(data: {
    title: string;
    category: string;
    description: string;
    deadline: string;
    urls?: string[];
  }) {
    this.axiosExtend.post('/api/assignment/create', data);
  }
}

const assignmentService = new AssignmentService();
export default assignmentService;
