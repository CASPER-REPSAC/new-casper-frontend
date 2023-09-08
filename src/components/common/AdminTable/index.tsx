import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}
function AdminTable({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.table`
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  width: 100%;
  position: relative;
`;
const THead = styled.thead`
  background-color: black;
`;
const Tr = styled.tr`
  vertical-align: middle;
  height: 50px;
`;
const Td = styled.td`
  vertical-align: middle;
`;
const TdCenter = styled.td`
  vertical-align: middle;
  text-align: center;
`;
const Th = styled.th`
  vertical-align: middle;
  color: ${({ theme }) => theme.white};
`;
const TBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
    &:hover {
      background-color: ${({ theme }) => theme.surfacePointAlt};
    }
  }
`;
const Caption = styled.caption`
  text-align: start;
  margin-bottom: 0.5em;
`;

AdminTable.THead = THead;
AdminTable.TBody = TBody;
AdminTable.TdCenter = TdCenter;
AdminTable.Td = Td;
AdminTable.Th = Th;
AdminTable.Tr = Tr;
AdminTable.Caption = Caption;

export default AdminTable;
