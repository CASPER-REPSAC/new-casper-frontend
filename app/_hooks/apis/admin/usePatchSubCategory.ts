import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function usePatchSubCategory() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({
      boardName,
      targetSubCategory,
      subCategory,
    }: {
      boardName: string;
      targetSubCategory: string;
      subCategory: string;
    }) =>
      axios.patch(`/proxy/api/board/patch/${boardName}/${targetSubCategory}`, {
        boardName,
        subCategory,
      }),

    onSuccess: () => {
      toast({
        description: '소분류 수정 성공',
      });
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
