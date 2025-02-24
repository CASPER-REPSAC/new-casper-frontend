import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { ProfileUpdateForm } from '@app/_types/userTypes';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { Input } from '@app/_shadcn/components/ui/input';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

function MyInfoSection() {
  const { register } = useFormContext<ProfileUpdateForm>();
  const { data: myProfile } = useMyInfo();
  const introduceRegister = register('introduce');
  const nameRegister = register('name', { required: true });
  const nicknameRegister = register('nickname', { required: true });
  const homepageRegister = register('homepage', { required: false });

  return (
    <>
      <Textarea
        label={INPUT_LABEL.introduce}
        placeholder={PLACEHOLDER.introduce}
        autoComplete="off"
        rows={4}
        {...introduceRegister}
      />
      <Input
        label={INPUT_LABEL.name}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        defaultValue={myProfile?.name}
        {...nameRegister}
      />
      <Input
        label={INPUT_LABEL.nickname}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        defaultValue={myProfile?.nickname}
        {...nicknameRegister}
      />
      <Input
        type="url"
        label={INPUT_LABEL.homepage}
        defaultValue={myProfile?.homepage}
        placeholder={PLACEHOLDER.homepage}
        autoComplete="off"
        {...homepageRegister}
      />
      <Input
        label={INPUT_LABEL.role}
        placeholder={PLACEHOLDER.role}
        defaultValue={myProfile?.role}
        readOnly
        disabled
      />
      <Input
        type="email"
        label={INPUT_LABEL.email}
        placeholder={PLACEHOLDER.email}
        defaultValue={myProfile?.email}
        readOnly
        disabled
      />
    </>
  );
}

export default MyInfoSection;
