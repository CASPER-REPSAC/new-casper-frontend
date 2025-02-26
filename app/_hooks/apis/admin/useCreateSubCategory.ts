import { revalidatePath } from '@app/_actions';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ADMIN_PATH } from '@app/_constants/urls';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useCreateSubCategory() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({
      boardName,
      subBoardName,
    }: {
      boardName: string;
      subBoardName: string;
    }) =>
      axios.post(`/proxy/api/board/add`, {
        boardName,
        subBoardName,
      }),

    onSuccess() {
      toast({ description: '소분류 생성 성공' });
      revalidatePath(ADMIN_PATH.board);
    },

    onError() {
      toast({ variant: 'destructive', description: '소분류 생성 성공' });
    },
  });
}

export default useCreateSubCategory;
