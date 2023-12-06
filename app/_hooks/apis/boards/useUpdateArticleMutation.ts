import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { UPDATE_ARTICLE_API } from 'app/_constants/apiUrl';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from 'app/_store/permissionAtoms';
import { UpdateReqData } from 'app/_types/PostTypes';
import { usePopup } from 'app/_hooks';
import { POPUP_MESSAGE } from 'app/_constants/message';
import { POPUP_DURATION } from 'app/_constants/duration';

function useUpdateArticleMutation(id: string) {
  const accessToken = useRecoilValue(accessTokenState);
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (data: UpdateReqData) =>
    axios.patch(`/proxy${UPDATE_ARTICLE_API}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  const onSuccess = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.updateSuccess,
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.failedToUpdate,
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}

export default useUpdateArticleMutation;
