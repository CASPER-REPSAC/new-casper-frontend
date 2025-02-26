import boardService from '@app/_service/boardService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { UpdateReqData } from '@app/_types/PostTypes';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { boardQueryKey } from '../queryKey';

function useUpdateArticleMutation(id: number) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = (data: UpdateReqData) =>
    boardService.updateArticle({ id, updateData: data });

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.updateSuccess,
    });
    queryClient.invalidateQueries({ queryKey: boardQueryKey.detail(id) });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: POPUP_MESSAGE.failedToUpdate,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useUpdateArticleMutation;
