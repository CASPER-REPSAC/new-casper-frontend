import { useRouter } from 'next/router';
import SideMenuLink from '@src/components/common/SideMenuLink';
import { PATH } from '@src/utils/urls';
import React, { useEffect, useState } from 'react';
import { BOARD_TYPE } from '@src/utils/constants';
import SideMenuWrapper from '@src/components/common/SideMenuWrapper';

function BoardSideMenu() {
  const [highlight, setHighlight] = useState('notice_board');
  const { query } = useRouter();
  const { notice, full, associate, graduate } = PATH.boards;

  useEffect(() => {
    if (!query.boardType || typeof query.boardType === 'object') return;
    setHighlight(query.boardType);
  }, [setHighlight, query]);

  return (
    <SideMenuWrapper>
      <SideMenuLink
        href={`${notice.url}/list/1`}
        name={notice.name}
        highlight={highlight === BOARD_TYPE.notice}
      />
      <SideMenuLink
        href={`${full.url}/list/1`}
        name={full.name}
        highlight={highlight === BOARD_TYPE.full}
      />
      <SideMenuLink
        href={`${associate.url}/list/1`}
        name={associate.name}
        highlight={highlight === BOARD_TYPE.associate}
      />
      <SideMenuLink
        href={`${graduate.url}/list/1`}
        name={graduate.name}
        highlight={highlight === BOARD_TYPE.graduate}
      />
    </SideMenuWrapper>
  );
}

export default React.memo(BoardSideMenu);
