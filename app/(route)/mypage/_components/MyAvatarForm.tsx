import { AvatarInput } from 'app/_components/common';
import { Profile } from 'app/_types/userTypes';
import { useFormContext } from 'react-hook-form';

function MyAvatarForm() {
  const { register } = useFormContext<Profile>();

  return <AvatarInput {...register('avatar')} />;
}

export default MyAvatarForm;
