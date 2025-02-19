import { useQuery } from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import { submitQueryKey } from '../queryKey';

export function useSubmissionDetail({
  assignmentId,
  submitId,
}: {
  assignmentId: number;
  submitId: number;
}) {
  return useQuery({
    queryKey: submitQueryKey.detail({ assignmentId, submitId }),
    queryFn: () => assignmentService.getSubmitDetail(assignmentId, submitId),
  });
}

export function useSubmitList(assignmentId: number, submitId: number) {
  return useQuery({
    queryKey: submitQueryKey.list({ assignmentId, submitId }),
    queryFn: () => assignmentService.getSubmitList(assignmentId, submitId),
  });
}
