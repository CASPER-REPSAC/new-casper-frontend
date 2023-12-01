import { AdminTable } from 'app/_components/common';

function UserListTable() {
  return (
    <AdminTable>
      <AdminTable.THead>
        <AdminTable.Tr>
          <AdminTable.Th>번호</AdminTable.Th>
          <AdminTable.Th>Id</AdminTable.Th>
          <AdminTable.Th>닉네임</AdminTable.Th>
          <AdminTable.Th>회원 권한</AdminTable.Th>
          <AdminTable.Th>상세 정보</AdminTable.Th>
          <AdminTable.Th>상태</AdminTable.Th>
        </AdminTable.Tr>
      </AdminTable.THead>
      <AdminTable.TBody>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.TdCenter>jijiseong</AdminTable.TdCenter>
          <AdminTable.TdCenter>jijiseong</AdminTable.TdCenter>
          <AdminTable.TdCenter>정회원</AdminTable.TdCenter>
          <AdminTable.TdCenter>수정하기</AdminTable.TdCenter>
          <AdminTable.TdCenter>활성화</AdminTable.TdCenter>
        </AdminTable.Tr>
      </AdminTable.TBody>
    </AdminTable>
  );
}

export default UserListTable;
