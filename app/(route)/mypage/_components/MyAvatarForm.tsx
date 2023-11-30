import { AvatarInput } from '@src/components/common/featureTag';
import { Profile } from 'app/_types/userTypes';
import { useFormContext } from 'react-hook-form';

function MyAvatarForm() {
  const { register } = useFormContext<Profile>();

  return <AvatarInput {...register('avatar')} />;
}

export default MyAvatarForm;
