import { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
  menus: {
    [key: string]: {
      name: string;
      url: string;
    };
  };
}

function SideMenu({ menus }: Props) {
  const { asPath } = useRouter();

  const Menus = Object.values(menus).map((menu) => (
    <StyledLink key={menu.name} href={menu.url}>
      <Item>
        {menu.name}
        {asPath.startsWith(menu.url) && <Highlight />}
      </Item>
    </StyledLink>
  ));

  return <Wrapper>{Menus}</Wrapper>;
}

const Wrapper = styled.div`
  display: inline;
  flex-direction: column;
  float: left;
  height: 100%;
  min-width: 230px;
  width: 230px;
  border-right: 1px solid ${(props) => props.theme.borderDefault};
  border-left: 1px solid ${(props) => props.theme.borderDefault};
  margin-right: 50px;
`;
const Item = styled.div`
  position: relative;
  display: flex;
  padding: 1em;
  height: 40px;
  font-size: 2rem;
  align-items: center;
`;
const Highlight = styled.div`
  position: absolute;
  left: 0px;
  background-color: ${({ theme }) => theme.surfacePointAlt};
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textDefault};
`;

export default memo(SideMenu);
