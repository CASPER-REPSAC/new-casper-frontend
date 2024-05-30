'use client';

import { useFormContext } from 'react-hook-form';
import { useEffect, useId, useState } from 'react';
import { CameraIcon } from '@app/_components/icons';
import { ProfileUpdateForm } from '@app/_types/userTypes';
import { useProfileUploadMutation } from '@app/_hooks/apis/user';
import { useRecoilValue } from 'recoil';
import { myProfileState } from '@app/_store/permissionAtoms';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@app/_shadcn/components/ui/avatar';

function MyAvatarForm() {
  const { register, watch } = useFormContext<ProfileUpdateForm>();
  const [previewSrc, setPreviewSrc] = useState('');
  const uniqueId = useId();
  const { mutate } = useProfileUploadMutation();
  const myProfile = useRecoilValue(myProfileState);

  const image = watch('profileImg');

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setPreviewSrc(URL.createObjectURL(file));
      mutate({ profile: file });
    }
  }, [image, mutate]);

  return (
    <label
      className="flex-center relative h-52 w-52 cursor-pointer self-center overflow-hidden rounded-full"
      htmlFor={uniqueId}
    >
      <Avatar className="h-full w-full">
        <AvatarImage src={previewSrc || myProfile?.image} />
        <AvatarFallback>
          <CameraIcon size={30} />
        </AvatarFallback>
      </Avatar>

      <input
        className="hidden"
        {...register('profileImg')}
        id={uniqueId}
        type="file"
        accept="image/*"
      />
    </label>
  );
}

export default MyAvatarForm;
