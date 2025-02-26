'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { BoardListParams } from '@app/_types/boardTypes';
import { Button } from '@app/_shadcn/components/ui/button';

function PostLink() {
  const { boardType } = useParams<BoardListParams>();
  const { data: myProfile } = useMyInfo();
  const onlyAdmin = boardType === 'notice_board' && myProfile?.role !== 'admin';

  return (
    <Button className="ml-auto" disabled={onlyAdmin}>
      <Link className="h-full w-full" href={`/boards/${boardType}/posts`}>
        작성 하기
      </Link>
    </Button>
  );
}

export default PostLink;
