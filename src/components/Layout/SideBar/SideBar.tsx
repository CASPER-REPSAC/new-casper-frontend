import { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface SideBarProps {
  menu_path: {
    [key: string]: string;
  };
}

function SideBar({ menu_path }: SideBarProps) {
  const { asPath } = useRouter();

  return (
    <Wrapper>
      {Object.entries(menu_path).map((entry, idx) => {
        const [menu, path] = entry;
        return (
          <StyledLink key={idx} href={path}>
            <Item>
              {menu}
              {path === asPath && <Highlight />}
            </Item>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
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

export default memo(SideBar);
