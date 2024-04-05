'use client';

import { roleState } from '@app/_store/permissionAtoms';
import { Button, Link } from '@nextui-org/react';
import { useRecoilValue } from 'recoil';

interface Props {
  params: { boardType: string; page: string };
}

function PostLink({ params }: Props) {
  const role = useRecoilValue(roleState);
  const onlyAdmin = params.boardType === 'notice_board' && role !== '관리자';

  return (
    <Button
      type="button"
      as={Link}
      color="primary"
      className="ml-auto"
      href={`/boards/${params.boardType}/posts`}
      isDisabled={onlyAdmin}
    >
      작성 하기
    </Button>
  );
}

export default PostLink;
