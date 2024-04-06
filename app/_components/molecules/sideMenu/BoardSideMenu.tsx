import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'next/navigation';
import { PATH } from '@app/_constants/urls';
import { roleState } from '@app/_store/permissionAtoms';
import { Link, Tab, Tabs } from '@nextui-org/react';
import { BoardListParams } from '@app/_types/boardTypes';
import { BOARD_TYPE } from '@app/_constants/mock';

const { notice, full, associate, graduate, free } = PATH.boards;
const TABS = [
  {
    key: BOARD_TYPE.notice,
    href: `${notice.url}/list/1`,
    name: notice.name,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    key: BOARD_TYPE.full,
    href: `${full.url}/list/1`,
    name: full.name,
    accessibleRoles: ['관리자', '정회원'],
  },
  {
    key: BOARD_TYPE.graduate,
    href: `${graduate.url}/list/1`,
    name: graduate.name,
    accessibleRoles: ['관리자', '정회원'],
  },
  {
    key: BOARD_TYPE.associate,
    href: `${associate.url}/list/1`,
    name: associate.name,
    accessibleRoles: ['관리자', '정회원', '준회원'],
  },
  {
    key: BOARD_TYPE.freedom,
    href: `${free.url}/list/1`,
    name: free.name,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
];

function BoardSideMenu() {
  const role = useRecoilValue(roleState);
  const { boardType } = useParams<BoardListParams>();
  return (
    <Tabs
      aria-label="Tabs form"
      classNames={{
        tabList: 'flex-col',
        panel: 'hidden',
      }}
      size="lg"
      selectedKey={boardType}
    >
      {TABS.map(({ key, href, name, accessibleRoles }) => {
        if (!accessibleRoles.includes(role)) return null;

        return (
          <Tab as={Link} key={key} href={href}>
            {name}
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default memo(BoardSideMenu);
