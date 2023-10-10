import Link from 'next/link';
import { styled } from 'styled-components';

interface Props {
  name: string;
  highlight: boolean;
  href: string;
}
function SideMenuItem({ name, highlight, href }: Props) {
  return (
    <Wrapper href={href}>
      {name}
      {highlight && <Highlight />}
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  padding: 1em;
  height: 40px;
  font-size: 2rem;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.sideMenuHover};
  }
  text-decoration: none;
  color: ${(props) => props.theme.textDefault};
`;

const Highlight = styled.div`
  position: absolute;
  left: 0px;
  background-color: ${({ theme }) => theme.surfaceAlt};
  border-right: 3px solid ${({ theme }) => theme.purple};
  width: 100%;
  height: 100%;
  z-index: -1;
  margin-left: 2px;
`;

export default SideMenuItem;
