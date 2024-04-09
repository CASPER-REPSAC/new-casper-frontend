import { PROFILE_UPDATE_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { usePopup } from '@app/_hooks';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import { ProfileUpdateRequset } from '@app/_types/userTypes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

function useProfileUpdateMutation() {
  const { openAndDeletePopup } = usePopup();
  const bearerToken = useRecoilValue(bearerTokenState);

  const mutationFn = async (data: ProfileUpdateRequset) =>
    axios.post(`/proxy${PROFILE_UPDATE_API}`, data, {
      headers: {
        Authorization: bearerToken,
      },
    });

  const onSuccess = () => {
    openAndDeletePopup({
      message: '프로필이 업데이트 되었어요.',
      duration: POPUP_DURATION.medium,
    });
  };

  const onError = () => {
    openAndDeletePopup({
      message: '프로필 업데이트 실패했어요.',
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useProfileUpdateMutation;
