import { POPUP_DURATION } from '@app/_constants/duration';
import { ERROR_MESSAGE } from '@app/_constants/message';
import { usePopup } from '@app/_hooks';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { CommentRequest } from '@app/_types/boardTypes';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { useRecoilValue } from 'recoil';

function useCommentMutation(id: string) {
  const { openAndDeletePopup } = usePopup();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = ({ text }: CommentRequest) => {
    const params: CommentRequest = { text };
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: bearerToken,
      },
    };
    return axios.post(`/proxy/api/article/${id}/comment`, params, config);
  };

  const onSuccess = () => {
    openAndDeletePopup({
      message: '댓글이 작성 되었어요.',
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      message: ERROR_MESSAGE.unknown,
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useCommentMutation;
