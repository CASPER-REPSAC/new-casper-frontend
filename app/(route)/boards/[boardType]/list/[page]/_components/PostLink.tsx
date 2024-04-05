'use client';

import { roleState } from '@app/_store/permissionAtoms';
import { BoardListParams } from '@app/_types/boardTypes';
import { Button, Link } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';

function PostLink() {
  const { boardType } = useParams<BoardListParams>();
  const role = useRecoilValue(roleState);
  const onlyAdmin = boardType === 'notice_board' && role !== '관리자';

  return (
    <Button
      type="button"
      as={Link}
      color="primary"
      className="ml-auto"
      href={`/boards/${boardType}/posts`}
      isDisabled={onlyAdmin}
    >
      작성 하기
    </Button>
  );
}

export default PostLink;
