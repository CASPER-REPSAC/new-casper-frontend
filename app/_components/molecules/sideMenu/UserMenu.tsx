'use client';

import { PATH } from '@app/_constants/urls';
import { useLogoutMutation } from '@app/_hooks/apis/user';
import { Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function UserMenu() {
  const { mutate } = useLogoutMutation();
  const [selected, setSelected] = useState('mypage');

  useEffect(() => {
    if (selected === 'logout') mutate();
  }, [selected, mutate]);

  return (
    <Tabs
      variant="light"
      classNames={{
        tabList: 'flex-col',
        panel: 'hidden',
      }}
      onSelectionChange={(key) => setSelected(String(key))}
      selectedKey={selected}
    >
      <Tab as={Link} href={PATH.user.mypage.url}>
        내 정보
      </Tab>
      <Tab key="logout">Logout</Tab>
    </Tabs>
  );
}

export default UserMenu;
