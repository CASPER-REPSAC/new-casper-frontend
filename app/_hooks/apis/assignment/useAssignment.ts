import assignmentService from '@app/_service/assignmentService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

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

export function useAssignmentDetail({
  assignmentId,
  enabled = true,
}: {
  assignmentId: number;
  enabled?: boolean;
}) {
  return useQuery({
    queryKey: ['assignment', 'detail', assignmentId],
    queryFn: () => assignmentService.getAssignmentDetail(assignmentId),
    enabled,
  });
}
