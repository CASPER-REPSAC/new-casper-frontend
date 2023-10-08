import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function HeaderSubMenu({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  width: 100%;
  text-decoration: none;
  color: white;
  padding: 1rem 1rem;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.textPoint};
  }
  &:active {
    background-color: ${({ theme }) => theme.surfacePointDefault};
  }
`;

HeaderSubMenu.Item = Item;

export default HeaderSubMenu;
