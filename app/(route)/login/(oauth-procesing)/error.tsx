'use client';

import Link from 'next/link';
import { NEW_PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';

function Error() {
  return (
    <div className="mx-auto flex h-screen flex-col gap-4">
      <div>로그인 처리 중 에러가 발생했습니다.</div>
      <div>지속적으로 발생시 관리자에게 문의해주세요.</div>
      <div>
        <Button asChild>
          <Link href={NEW_PATH.login.url}>로그인 페이지로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}

export default Error;
