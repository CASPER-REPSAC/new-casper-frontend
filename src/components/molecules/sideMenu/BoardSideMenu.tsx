import { useSearchParams } from 'next/navigation';
import { PATH } from 'app/_constants/urls';
import React, { useEffect, useState } from 'react';
import { BOARD_TYPE } from 'app/_constants/mock';
import { SideMenuLink, SideMenuWrapper } from './common';

function BoardSideMenu() {
  const [highlight, setHighlight] = useState('notice_board');
  const searchParams = useSearchParams();
  const { notice, full, associate, graduate } = PATH.boards;

  useEffect(() => {
    const boardType = searchParams?.get('boardType');
    if (boardType) {
      setHighlight(boardType);
    }
  }, [setHighlight, searchParams]);

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
