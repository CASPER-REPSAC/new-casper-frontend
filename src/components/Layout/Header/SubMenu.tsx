import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

type pathObject = {
  [key: string]: {
    name: string;
    url: string;
  };
};

interface SubMenuProps {
  subMenuInfo: pathObject;
  open: boolean;
}

export default function SubMenu({ subMenuInfo, open }: SubMenuProps) {
  const router = useRouter();
  const redirect = (path: string) => {
    router.push(path);
  };

  const SubMenus = Object.keys(subMenuInfo).map((key, idx) => {
    const subMenu = subMenuInfo[key];
    return (
      <SubMenuItem key={idx} onClick={() => redirect(subMenu.url)}>
        {subMenu.name}
      </SubMenuItem>
    );
  });
  return <SubMenuWrapper $open={open}>{SubMenus}</SubMenuWrapper>;
}

const SubMenuWrapper = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.surfaceAlt};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.textDefault};
  transform-origin: top;
  min-width: 100px;
`;

const SubMenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
  }
`;
