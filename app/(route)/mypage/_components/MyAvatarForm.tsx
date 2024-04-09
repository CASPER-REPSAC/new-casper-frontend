import { useFormContext } from 'react-hook-form';
import { useEffect, useId, useState } from 'react';
import { Avatar } from '@nextui-org/react';
import { CameraIcon } from '@app/_components/icons';

function MyAvatarForm() {
  const { register, watch } = useFormContext();
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
      className="flex-center  relative h-52 w-52 cursor-pointer self-center overflow-hidden rounded-full"
      htmlFor={uniqueId}
    >
      <Avatar
        className="h-full w-full"
        src={previewSrc}
        fallback={<CameraIcon size={30} />}
      />

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
