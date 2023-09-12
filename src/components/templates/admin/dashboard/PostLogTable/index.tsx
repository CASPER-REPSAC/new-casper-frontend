import AdminTable from '@src/components/common/AdminTable';
import DashboardTable from '@src/components/molecules/AdminTable/DashboardTable';

function PostLogTable() {
  return (
    <DashboardTable caption="최근 작성 게시글">
      <AdminTable.THead>
        <AdminTable.Tr>
          <AdminTable.Th>번호</AdminTable.Th>
          <AdminTable.Th>제목</AdminTable.Th>
          <AdminTable.Th>날짜</AdminTable.Th>
          <AdminTable.Th>작성자</AdminTable.Th>
        </AdminTable.Tr>
      </AdminTable.THead>
      <AdminTable.TBody>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>박지성</AdminTable.Td>
        </AdminTable.Tr>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>박지성</AdminTable.Td>
        </AdminTable.Tr>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>박지성</AdminTable.Td>
        </AdminTable.Tr>
        <AdminTable.Tr>
          <AdminTable.TdCenter>1</AdminTable.TdCenter>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>1</AdminTable.Td>
          <AdminTable.Td>박지성</AdminTable.Td>
        </AdminTable.Tr>
      </AdminTable.TBody>
    </DashboardTable>
  );
}

export default PostLogTable;