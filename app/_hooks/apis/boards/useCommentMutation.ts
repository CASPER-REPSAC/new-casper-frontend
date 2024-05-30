import { ERROR_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { CommentWriteRequest } from '@app/_types/boardTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { useRecoilValue } from 'recoil';

function useCommentMutation(articleId: string) {
  const queryCache = useQueryClient();
  const { toast } = useToast();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = ({ text }: CommentWriteRequest) => {
    const params: CommentWriteRequest = { text };
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: bearerToken,
      },
    };
    return axios.post(
      `/proxy/api/article/${articleId}/comment`,
      params,
      config,
    );
  };

  const onSuccess = () => {
    toast({
      description: '댓글이 작성 되었어요.',
    });
    queryCache.invalidateQueries({ queryKey: ['comment', articleId] });
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: ERROR_MESSAGE.unknown,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useCommentMutation;
