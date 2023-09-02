import { useRouter } from 'next/router';
import styled from 'styled-components';

type SubMenuInfoType = {
  [key: string]: {
    name: string;
    url: string;
  };
};

interface Props {
  subMenuInfo: SubMenuInfoType;
  open: boolean;
}

export default function SubMenu({ subMenuInfo, open }: Props) {
  const router = useRouter();

  const SubMenus = Object.keys(subMenuInfo).map((key) => {
    const subMenu = subMenuInfo[key];
    return (
      <SubMenuItem
        key={subMenu.name}
        onClick={(e) => {
          router.push(subMenu.url);
          e.stopPropagation();
        }}
      >
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
