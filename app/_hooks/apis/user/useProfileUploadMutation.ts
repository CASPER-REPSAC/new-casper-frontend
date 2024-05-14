import { PROFILE_UPLOAD_API } from '@app/_constants/apiUrl';
import { TOAST_TITLE } from '@app/_constants/message';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
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
  const { toast } = useToast();
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
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: '이미지 업로드 실패했어요.',
    });
  };

  return useMutation({ mutationFn, onError, onSuccess });
}

export default useProfileUploadMutation;
