import { DELETE_ARTICLE_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { ERROR_MESSAGE, POPUP_MESSAGE } from '@app/_constants/message';
import { PATH } from '@app/_constants/urls';
import { usePopup } from '@app/_hooks';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { ErrorResponse } from '@app/_types/errorTypes';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

function useDeleteArticleMutation(id: string) {
  const { push } = useRouter();
  const { openAndDeletePopup } = usePopup();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = () =>
    axios.delete(`/proxy${DELETE_ARTICLE_API}/${id}`, {
      headers: {
        Authorization: bearerToken,
      },
    });

  const onSuccess = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.deleteSuccess,
      duration: POPUP_DURATION.medium,
    });
    push(`${PATH.boards.notice.url}/list/1`);
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
    const code = error.response?.data.code;
    switch (code) {
      case -303:
        openAndDeletePopup({
          message: ERROR_MESSAGE['-303'],
          duration: POPUP_DURATION.medium,
        });
        break;
      default:
        openAndDeletePopup({
          message: ERROR_MESSAGE.unknown,
          duration: POPUP_DURATION.medium,
        });
    }
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useDeleteArticleMutation;
