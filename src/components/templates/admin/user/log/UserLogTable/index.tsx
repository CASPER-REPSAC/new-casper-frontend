import { AdminTable } from '@src/components/common';

function UserLogTable() {
  return (
    <AdminTable>
      <AdminTable.THead>
        <AdminTable.Tr>
          <AdminTable.Th>번호</AdminTable.Th>
          <AdminTable.Th>ID</AdminTable.Th>
          <AdminTable.Th>날짜</AdminTable.Th>
          <AdminTable.Th>시간</AdminTable.Th>
          <AdminTable.Th>IP</AdminTable.Th>
        </AdminTable.Tr>
      </AdminTable.THead>
      <AdminTable.TBody>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.TdCenter>jijiseong</AdminTable.TdCenter>
          <AdminTable.TdCenter>23.02.02</AdminTable.TdCenter>
          <AdminTable.TdCenter>hh:mm:ss</AdminTable.TdCenter>
          <AdminTable.TdCenter>12.12.12.12</AdminTable.TdCenter>
        </AdminTable.Tr>
      </AdminTable.TBody>
    </AdminTable>
  );
}

export default UserLogTable;
