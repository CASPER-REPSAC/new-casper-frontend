import { useParams } from 'next/navigation';
import { Link, Tab, Tabs } from '@nextui-org/react';
import { MEMBER_TABS } from '@app/_constants/menu';

interface Props {
  size?: 'lg' | 'sm' | 'md';
  variant?: 'solid' | 'light' | 'underlined' | 'bordered';
}
function MemberMenu({ size, variant }: Props) {
  const { memberType } = useParams<{ memberType: string }>();

  return (
    <Tabs
      aria-label="member side menu"
      classNames={{
        tabList: 'flex-col',
        panel: 'hidden',
      }}
      variant={variant}
      size={size}
      selectedKey={memberType}
    >
      {MEMBER_TABS.map(({ key, href, name }) => {
        return (
          <Tab as={Link} key={key} href={href}>
            {name}
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default MemberMenu;
