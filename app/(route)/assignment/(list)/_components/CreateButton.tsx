'use client';

import Link from 'next/link';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { CASPER_MEMBER_AND_ABOVE } from '@app/_constants/role';
import { NEW_PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';

export default function CreateButton() {
  const { data: myInfo } = useMyInfo();

  if (!myInfo || !CASPER_MEMBER_AND_ABOVE.includes(myInfo.role)) return null;

  return (
    <Button asChild>
      <Link href={NEW_PATH.assignmentCreate.url}>새 과제 만들기</Link>
    </Button>
  );
}
