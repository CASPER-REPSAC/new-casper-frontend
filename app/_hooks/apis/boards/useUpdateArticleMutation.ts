import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { UPDATE_ARTICLE_API } from '@app/_constants/apiUrl';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { UpdateReqData } from '@app/_types/PostTypes';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function useUpdateArticleMutation(id: string) {
  const accessToken = useRecoilValue(accessTokenState);
  const { toast } = useToast();

  const mutationFn = (data: UpdateReqData) =>
    axios.patch(`/proxy${UPDATE_ARTICLE_API}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  const onSuccess = () => {
    toast({
      description: POPUP_MESSAGE.updateSuccess,
    });
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
