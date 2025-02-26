'use client';

import { ChangeEvent, useEffect, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import useFileUploadMutation from '@app/_hooks/apis/shared/useFileUploadMutation';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import Spinner from '@app/_components/Spinner';
import { CameraIcon } from '@app/_components/icons';
import Avatar from '@app/_components/user/Avatar';
import { ProfileUpdateForm } from '@app/_types/userTypes';

function MyAvatarInput() {
  const { register, setValue } = useFormContext<ProfileUpdateForm>();
  const uniqueId = useId();
  const { data: myProfile } = useMyInfo();
  const {
    data: uploadedFile,
    mutate: fileUploadMutate,
    isSuccess,
    isPending,
  } = useFileUploadMutation();

  const fileInputRegister = register('profileImg', {
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.currentTarget;
      if (!files) return;
      fileUploadMutate({ type: 'profile', files });
    },
  });

  useEffect(() => {
    if (isSuccess && uploadedFile[0].url)
      setValue('profileImgPath', uploadedFile[0].url);
  }, [uploadedFile, isSuccess, setValue]);

  return (
    <label
      className="flex-center relative h-52 w-52 cursor-pointer self-center overflow-hidden rounded-full"
      htmlFor={uniqueId}
    >
      <Avatar
        className="h-full w-full"
        src={uploadedFile?.[0].url || myProfile?.image}
        fallback={isPending ? <Spinner /> : <CameraIcon size={30} />}
        rounded={false}
        alt="profile"
      />

      <input
        className="hidden"
        {...fileInputRegister}
        id={uniqueId}
        type="file"
        accept="image/*"
      />
    </label>
  );
}

export default MyAvatarInput;
