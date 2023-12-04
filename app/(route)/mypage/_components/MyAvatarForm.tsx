import { Profile } from 'app/_types/userTypes';
import { useFormContext } from 'react-hook-form';
import { useEffect, useId, useState } from 'react';
import Image from 'next/image';

function MyAvatarForm() {
  const { register, watch } = useFormContext<Profile>();
  const [previewSrc, setPreviewSrc] = useState('');
  const uniqueId = useId();

  const image = watch('avatar');

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setPreviewSrc(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <label
      className="flex-center input relative h-52 w-52 cursor-pointer self-center overflow-hidden rounded-full hover:brightness-75"
      htmlFor={uniqueId}
    >
      {previewSrc ? (
        <Image className="object-cover" src={previewSrc} alt="preview" fill />
      ) : (
        <>이미지 변경하기</>
      )}
      <input
        className="hidden"
        {...register('avatar')}
        id={uniqueId}
        type="file"
        accept="image/*"
      />
    </label>
  );
}

export default MyAvatarForm;
