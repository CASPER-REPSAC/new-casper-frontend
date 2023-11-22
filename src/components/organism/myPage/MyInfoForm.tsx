import { useFormContext } from 'react-hook-form';
import { LabelInput, LabelTextarea } from '@src/components/common/featureTag';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { Profile } from '@src/types/userTypes';
import { useProfile } from '@src/hooks/apis/user';

function MyInfoFrom() {
  const { register } = useFormContext<Profile>();
  const { data, isLoading } = useProfile('ine');

  const introduceRegister = register('introduce', { required: true });
  const nameRegister = register('name', { required: true });
  const nicknameRegister = register('nickname', { required: true });
  const roleRegister = register('role', { required: true });
  const homepageRegister = register('homepage', { required: true });

  if (!data || isLoading) return <>Loading</>;

  return (
    <>
      <LabelTextarea
        label={INPUT_LABEL.introduce}
        register={introduceRegister}
        placeholder={PLACEHOLDER.introduce}
        autoComplete="off"
        cols={4}
      />
      <LabelInput
        label={INPUT_LABEL.name}
        register={nameRegister}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        defaultValue={data.name}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        register={nicknameRegister}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        defaultValue={data.nickname}
      />
      <LabelInput
        label={INPUT_LABEL.role}
        register={roleRegister}
        placeholder={PLACEHOLDER.role}
        autoComplete="off"
        defaultValue={data.role}
      />
      <LabelInput
        label={INPUT_LABEL.homepage}
        register={homepageRegister}
        placeholder={PLACEHOLDER.homepage}
        autoComplete="off"
      />
    </>
  );
}

export default MyInfoFrom;
