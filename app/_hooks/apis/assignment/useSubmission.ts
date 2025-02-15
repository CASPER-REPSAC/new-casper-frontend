import { useQuery } from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';

export function useSubmissionDetail({
  assignmentId,
  submitId,
}: {
  assignmentId: number;
  submitId: number;
}) {
  return useQuery({
    queryKey: ['submitDetail', assignmentId, submitId],
    queryFn: () => assignmentService.getSubmitDetail(assignmentId, submitId),
  });
}

export function useSubmitList(assignmentId: number, submitId: number) {
  return useQuery({
    queryKey: ['submit', 'list', assignmentId, submitId],
    queryFn: () => assignmentService.getSubmitList(assignmentId, submitId),
  });
}
