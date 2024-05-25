import { revalidatePath } from '@app/_actions';
import { ADMIN_PATH } from '@app/_constants/urls';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useDeleteSubCategory() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({
      boardName,
      targetSubCategory,
    }: {
      boardName: string;
      targetSubCategory: string;
    }) =>
      axios.delete(`/proxy/api/board/delete/${boardName}/${targetSubCategory}`),

    onSuccess: () => {
      toast({
        description: '소분류 삭제 성공',
      });
      revalidatePath(ADMIN_PATH.board);
    },

    onError: () => {
      toast({
        variant: 'destructive',
        description: '소분류 삭제 실패',
      });
    },
  });
}

export default useDeleteSubCategory;
