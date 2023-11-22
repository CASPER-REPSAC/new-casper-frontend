import { AdminTable } from '@src/components/common';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  caption: string;
  children: ReactNode;
}

function DashboardTable({ caption, children }: Props) {
  return (
    <Wrapper>
      <TableCaption>
        <Caption>{caption}</Caption>
        <Button>전체보기</Button>
      </TableCaption>
      <AdminTable>{children}</AdminTable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const TableCaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;
const Caption = styled.span`
  font-size: 1.8rem;
`;
const Button = styled.button`
  color: ${({ theme }) => theme.textWeek};
  &:hover {
    color: ${({ theme }) => theme.textStrong};
  }
`;

export default DashboardTable;
