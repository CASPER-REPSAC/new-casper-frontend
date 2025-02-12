import assignmentService from '@app/_service/assignmentService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useCreateAssignment() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (
      data: Parameters<typeof assignmentService.createAssignment>[0],
    ) => assignmentService.createAssignment(data),

    onSuccess: () => {
      toast({ title: '과제', description: '과제 생성이 완료되었어요.' });
    },

    onError: () => {
      toast({
        variant: 'destructive',
        title: '과제',
        description: '과제 생성이 실패했어요.',
      });
    },
  });
}

export function useAssignmentDetail(assignmentId: number) {
  return useQuery({
    queryKey: ['assignment', 'detail', assignmentId],
    queryFn: () => assignmentService.getAssignmentDetail(assignmentId),
  });
}

export function useSubmitList(assignmentId: number, submitId: number) {
  return useQuery({
    queryKey: ['submit', 'list', assignmentId, submitId],
    queryFn: () => assignmentService.getSubmitList(assignmentId, submitId),
  });
}
