'use client';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { myProfileState } from '@app/_store/permissionAtoms';
import { Separator } from '@app/_shadcn/components/ui/separator';
import { PATH } from '@app/_constants/urls';
import { Button, buttonVariants } from '@app/_shadcn/components/ui/button';
import MyAvatarInput from './_components/MyAvatarInput';
import MyInfoSection from './_components/MyInfoSection';
import ProfileForm from './_components/ProfileForm';
import AccountSettingSection from './_components/AccountSettingSection';

function MyPage() {
  const myProfile = useRecoilValue(myProfileState);

  if (!myProfile)
    return (
      <div className="flex-center">
        <Link
          href={PATH.user.login.url}
          className={buttonVariants({ variant: 'default' })}
        >
          로그인이 필요해요
        </Link>
      </div>
    );

  const defaultValues = {
    introduce: myProfile.introduce,
    name: myProfile.name,
    nickname: myProfile.nickname,
    role: myProfile.role,
    homepage: myProfile.homepage,
  };

  return (
    <>
      <ProfileForm defaultValues={defaultValues}>
        <MyAvatarInput />
        <MyInfoSection />
        <Button type="submit" size="lg">
          저장
        </Button>
      </ProfileForm>
      <Separator className="my-8" />
      <AccountSettingSection />
    </>
  );
}

export default MyPage;
