import { useParams } from 'next/navigation';
import { PATH } from '@app/_constants/urls';
import { Link, Tab, Tabs } from '@nextui-org/react';
import { MEMBER_TYPE } from '@app/_constants/mock';

const { active, rest, graduate } = PATH.members;
const TABS = [
  {
    key: MEMBER_TYPE.active,
    href: active.url,
    name: active.name,
  },
  {
    key: MEMBER_TYPE.rest,
    href: rest.url,
    name: rest.name,
  },
  {
    key: MEMBER_TYPE.graduate,
    href: graduate.url,
    name: graduate.name,
  },
];

function MemberSideMenu() {
  const { memberType } = useParams<{ memberType: string }>();

  return (
    <Tabs
      aria-label="Tabs form"
      classNames={{
        tabList: 'flex-col',
        panel: 'hidden',
      }}
      size="lg"
      selectedKey={memberType}
    >
      {TABS.map(({ key, href, name }) => {
        return (
          <Tab as={Link} key={key} href={href}>
            {name}
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default MemberSideMenu;
