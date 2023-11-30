import { useFormContext } from 'react-hook-form';
import { LabelInput, LabelTextarea } from '@src/components/common/featureTag';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { Profile } from 'app/_types/userTypes';
import { useRecoilValue } from 'recoil';
import { myProfileState } from 'app/_store/permissionAtoms';

function MyInfoFrom() {
  const { register } = useFormContext<Profile>();
  const myProfile = useRecoilValue(myProfileState);

  const introduceRegister = register('introduce', { required: true });
  const nameRegister = register('name', { required: true });
  const nicknameRegister = register('nickname', { required: true });
  const roleRegister = register('role', { required: true, disabled: true });
  const homepageRegister = register('homepage', { required: true });

  if (!myProfile)
    return (
      <>
        현재 자동로그인 로직에서 내 정보를 저장할 수 없어요. 개발 중입니다.
        내정보를 불러 올 수 없다!
      </>
    );

  return (
    <>
      <LabelTextarea
        label={INPUT_LABEL.introduce}
        {...introduceRegister}
        placeholder={PLACEHOLDER.introduce}
        autoComplete="off"
        rows={4}
      />
      <LabelInput
        label={INPUT_LABEL.name}
        {...nameRegister}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        defaultValue={myProfile.name}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        {...nicknameRegister}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        defaultValue={myProfile.nickname}
      />
      <LabelInput
        label={INPUT_LABEL.role}
        {...roleRegister}
        placeholder={PLACEHOLDER.role}
        autoComplete="off"
        defaultValue={myProfile.role}
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
