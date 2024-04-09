import { PROFILE_UPLOAD_API } from '@app/_constants/apiUrl';
import { POPUP_DURATION } from '@app/_constants/duration';
import { usePopup } from '@app/_hooks';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import {
  ProfileImageUploadRequest,
  ProfileUpdateForm,
} from '@app/_types/userTypes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

function useProfileUploadMutation() {
  const { openAndDeletePopup } = usePopup();
  const bearerToken = useRecoilValue(bearerTokenState);
  const { setValue } = useFormContext<ProfileUpdateForm>();

  const mutationFn = async ({ profile }: ProfileImageUploadRequest) => {
    const formData = new FormData();
    formData.append('profile', profile);

    const { data } = await axios.postForm<{ profile: string }>(
      `/proxy${PROFILE_UPLOAD_API}`,
      formData,
      {
        headers: {
          Authorization: bearerToken,
        },
      },
    );
    return data;
  };

  const onSuccess = ({ profile }: { profile: string }) => {
    setValue('profileImgPath', profile);
  };

  const onError = () => {
    openAndDeletePopup({
      message: '이미지 업로드 실패했어요.',
      duration: POPUP_DURATION.medium,
    });
  };

  return useMutation({ mutationFn, onError, onSuccess });
}

export default useProfileUploadMutation;
