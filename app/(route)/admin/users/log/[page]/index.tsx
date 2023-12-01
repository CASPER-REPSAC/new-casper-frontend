import UserLogTable from 'app/(route)/admin/users/log/[page]/_components/UserLogTable';
import { AdminCenterWrapper } from 'app/_components/common';

function UserLogPage() {
  return (
    <AdminCenterWrapper>
      <UserLogTable />
      {/* <BoardFooter maxPage={10} curPage={curPage} /> */}
    </AdminCenterWrapper>
  );
}

export default UserLogPage;
