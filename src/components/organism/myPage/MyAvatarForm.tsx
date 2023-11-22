import { AvatarInput } from '@src/components/common/featureTag';
import { Profile } from '@src/types/userTypes';
import { useFormContext } from 'react-hook-form';

function MyAvatarForm() {
  const { register } = useFormContext<Profile>();

  return <AvatarInput register={register('avatar')} />;
}

export default MyAvatarForm;
