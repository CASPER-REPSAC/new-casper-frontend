'use client';

import { Button } from '@app/_shadcn/components/ui/button';
import { roleState } from '@app/_store/permissionAtoms';
import { BoardListParams } from '@app/_types/boardTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';

function PostLink() {
  const { boardType } = useParams<BoardListParams>();
  const role = useRecoilValue(roleState);
  const onlyAdmin = boardType === 'notice_board' && role !== '관리자';

  return (
    <Button asChild className="ml-auto" disabled={onlyAdmin}>
      <Link href={`/boards/${boardType}/posts`}>작성 하기</Link>
    </Button>
  );
}

export default PostLink;
