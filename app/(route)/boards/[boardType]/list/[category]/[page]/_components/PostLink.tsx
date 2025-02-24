'use client';

import { Button } from '@app/_shadcn/components/ui/button';
import { BoardListParams } from '@app/_types/boardTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

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
