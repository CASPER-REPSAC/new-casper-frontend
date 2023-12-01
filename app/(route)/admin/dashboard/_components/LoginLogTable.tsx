import { AdminTable } from 'app/_components/common';

import DashboardTable from 'app/_components/molecules/adminTable/DashboardTable';

function LoginLogTable() {
  return (
    <DashboardTable caption="최근 로그인">
      <AdminTable.THead>
        <AdminTable.Tr>
          <AdminTable.Th>번호</AdminTable.Th>
          <AdminTable.Th>ID</AdminTable.Th>
          <AdminTable.Th>날짜</AdminTable.Th>
          <AdminTable.Th>IP</AdminTable.Th>
        </AdminTable.Tr>
      </AdminTable.THead>
      <AdminTable.TBody>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1.1.1.1</AdminTable.Td>
        </AdminTable.Tr>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1.1.1.1</AdminTable.Td>
        </AdminTable.Tr>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1.1.1.1</AdminTable.Td>
        </AdminTable.Tr>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1.1.1.1</AdminTable.Td>
        </AdminTable.Tr>
      </AdminTable.TBody>
    </DashboardTable>
  );
}

export default LoginLogTable;
