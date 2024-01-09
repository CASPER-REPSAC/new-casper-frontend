'use client';

import { DefaultLink } from '@app/_components/common';
import { roleState } from '@app/_store/permissionAtoms';
import { useRecoilValue } from 'recoil';

interface Props {
  params: { boardType: string; page: string };
}

function PostLink({ params }: Props) {
  const role = useRecoilValue(roleState);

  if (params.boardType === 'notice_board' && role !== '관리자') {
    return <></>;
  }

  return (
    <DefaultLink
      className="ml-auto"
      theme="primary"
      href={`/boards/${params.boardType}/posts`}
    >
      작성 하기
    </DefaultLink>
  );
}

export default PostLink;
