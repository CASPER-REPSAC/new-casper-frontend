import UserListTable from 'app/(route)/admin/users/list/[page]/_components/UserListTable';
import { AdminCenterWrapper } from 'app/_components/common';

function UserListPage() {
  return (
    <AdminCenterWrapper>
      <UserListTable />
      {/* <BoardFooter maxPage={10} curPage={curPage} /> */}
    </AdminCenterWrapper>
  );
}

export default UserListPage;
