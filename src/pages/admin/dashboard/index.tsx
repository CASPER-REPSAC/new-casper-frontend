import AdminTable from '@src/components/common/AdminTable';
import { styled } from 'styled-components';

function Dashboard() {
  return (
    <TmpDiv>
      <AdminTable>
        <AdminTable.THead>
          <AdminTable.Tr>
            <AdminTable.Th>제목 1</AdminTable.Th>
            <AdminTable.Th>제목 2</AdminTable.Th>
            <AdminTable.Th>제목 3</AdminTable.Th>
          </AdminTable.Tr>
        </AdminTable.THead>
        <AdminTable.TBody>
          <AdminTable.Tr>
            <AdminTable.TdCenter>내용1</AdminTable.TdCenter>
            <AdminTable.Td>내용2</AdminTable.Td>
            <AdminTable.Td>내용3</AdminTable.Td>
          </AdminTable.Tr>
          <AdminTable.Tr>
            <AdminTable.TdCenter>내용1</AdminTable.TdCenter>
            <AdminTable.Td>내용2</AdminTable.Td>
            <AdminTable.Td>내용3</AdminTable.Td>
          </AdminTable.Tr>
        </AdminTable.TBody>
      </AdminTable>
    </TmpDiv>
  );
}

const TmpDiv = styled.div`
  height: 300px;
  width: 500px;
  margin: 50px;
`;

export default Dashboard;
