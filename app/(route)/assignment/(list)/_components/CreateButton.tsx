'use client';

import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { Button } from '@app/_shadcn/components/ui/button';
import { NEW_PATH } from '@app/_constants/urls';
import Link from 'next/link';

export default function CreateButton() {
  const { data: myInfo } = useMyInfo();

  if (!myInfo || !['active', 'admin'].includes(myInfo.role)) return null;

  return (
    <Button asChild>
      <Link href={NEW_PATH.assignmentCreate.url}>새 과제 만들기</Link>
    </Button>
  );
}
