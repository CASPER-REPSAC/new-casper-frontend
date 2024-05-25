import { revalidatePath } from '@app/_actions';
import { ADMIN_PATH } from '@app/_constants/urls';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function usePatchSubCategory() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({
      boardName,
      targetSubCategory,
      subBoardName,
    }: {
      boardName: string;
      targetSubCategory: string;
      subBoardName: string;
    }) =>
      axios.patch(`/proxy/api/board/patch/${boardName}/${targetSubCategory}`, {
        boardName,
        subBoardName,
      }),

    onSuccess: () => {
      toast({
        description: '소분류 수정 성공',
      });
      revalidatePath(ADMIN_PATH.board);
    },

    onError: () => {
      toast({
        variant: 'destructive',
        description: '소분류 수정 실패',
      });
    },
  });
}

export default usePatchSubCategory;
