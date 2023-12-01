import { AdminCenterWrapper } from 'app/_components/common';
import {
  CommentLogTable,
  FileLogTable,
  LoginLogTable,
  PostLogTable,
} from './_components';

function Dashboard() {
  return (
    <AdminCenterWrapper>
      <LoginLogTable />
      <FileLogTable />
      <PostLogTable />
      <CommentLogTable />
    </AdminCenterWrapper>
  );
}

export default Dashboard;
