import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { MyProfile } from '@app/_types/userTypes';
import { useRecoilValue } from 'recoil';
import { myProfileState, roleState } from '@app/_store/permissionAtoms';
import { Input, Textarea } from '@nextui-org/react';

function MyInfoFrom() {
  const { register } = useFormContext<MyProfile>();
  const myProfile = useRecoilValue(myProfileState);
  const role = useRecoilValue(roleState);

  const introduceRegister = register('introduce', { required: false });
  const nameRegister = register('name', { required: true });
  const nicknameRegister = register('nickname', { required: true });
  const roleRegister = register('role', { required: true, disabled: true });
  const homepageRegister = register('homepage', { required: false });
  const emailRegister = register('email');

  return (
    <>
      <Textarea
        label={INPUT_LABEL.introduce}
        defaultValue={myProfile?.introduce}
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
        label={INPUT_LABEL.role}
        placeholder={PLACEHOLDER.role}
        autoComplete="off"
        defaultValue={role}
        isReadOnly
        isDisabled
        {...roleRegister}
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
        type="email"
        label={INPUT_LABEL.email}
        placeholder={PLACEHOLDER.email}
        defaultValue={myProfile?.email}
        autoComplete="off"
        {...emailRegister}
      />
    </>
  );
}

export default MyInfoFrom;
