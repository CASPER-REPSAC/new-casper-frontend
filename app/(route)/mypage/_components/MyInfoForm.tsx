import { useFormContext } from 'react-hook-form';
import { LabelInput, LabelTextarea } from '@app/_components/common';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { MyProfile } from '@app/_types/userTypes';
import { useRecoilValue } from 'recoil';
import { myProfileState, roleState } from '@app/_store/permissionAtoms';

function MyInfoFrom() {
  const { register } = useFormContext<MyProfile>();
  const myProfile = useRecoilValue(myProfileState);
  const role = useRecoilValue(roleState);

  const introduceRegister = register('introduce', { required: false });
  const nameRegister = register('name', { required: true });
  const nicknameRegister = register('nickname', { required: true });
  const roleRegister = register('role', { required: true, disabled: true });
  const homepageRegister = register('homepage', { required: false });

  return (
    <>
      <LabelTextarea
        label={INPUT_LABEL.introduce}
        {...introduceRegister}
        placeholder={PLACEHOLDER.introduce}
        autoComplete="off"
        defaultValue={myProfile?.introduce}
        rows={4}
      />
      <LabelInput
        label={INPUT_LABEL.name}
        {...nameRegister}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        defaultValue={myProfile?.name}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        {...nicknameRegister}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        defaultValue={myProfile?.nickname}
      />
      <LabelInput
        label={INPUT_LABEL.role}
        {...roleRegister}
        placeholder={PLACEHOLDER.role}
        autoComplete="off"
        defaultValue={role}
      />
      <LabelInput
        label={INPUT_LABEL.homepage}
        {...homepageRegister}
        placeholder={PLACEHOLDER.homepage}
        autoComplete="off"
      />
    </>
  );
}

export default MyInfoFrom;
