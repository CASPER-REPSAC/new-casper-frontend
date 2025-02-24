'use client';

import Link from 'next/link';
import { Separator } from '@app/_shadcn/components/ui/separator';
import { PATH } from '@app/_constants/urls';
import { Button, buttonVariants } from '@app/_shadcn/components/ui/button';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

import MyAvatarInput from './_components/MyAvatarInput';
import MyInfoSection from './_components/MyInfoSection';
import ProfileForm from './_components/ProfileForm';
import AccountSettingSection from './_components/AccountSettingSection';

function MyPage() {
  const { isLoggedIn, data: myInfo } = useMyInfo();
  if (!isLoggedIn)
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
    introduce: myInfo?.introduce,
    name: myInfo?.name,
    nickname: myInfo?.nickname,
    role: myInfo?.role,
    homepage: myInfo?.homepage,
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
