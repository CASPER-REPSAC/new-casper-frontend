import { PROFILE_UPDATE_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { usePopup } from '@app/_hooks';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { ProfileUpdateReq } from '@app/_types/userTypes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

function useProfileUpdateMutation() {
  const { openAndDeletePopup } = usePopup();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = (params: ProfileUpdateReq) =>
    axios.post(`/proxy${PROFILE_UPDATE_API}`, params, {
      headers: {
        Authorization: bearerToken,
      },
    });

  const onSuccess = () => {
    openAndDeletePopup({
      message: '수정 되었습니다.',
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      message: '수정 실패.',
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useProfileUpdateMutation;
