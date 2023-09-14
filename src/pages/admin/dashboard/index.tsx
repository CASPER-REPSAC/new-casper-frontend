import AdminCenterWrapper from '@src/components/common/Layout/AdminCenterWrapper';
import CommentLogTable from '@src/components/templates/admin/dashboard/CommentLogTable';
import FileLogTable from '@src/components/templates/admin/dashboard/FileLogTable';
import LoginLogTable from '@src/components/templates/admin/dashboard/LoginLogTable';
import PostLogTable from '@src/components/templates/admin/dashboard/PostLogTable';
import { styled } from 'styled-components';

function Dashboard() {
  return (
    <CenterWrapper>
      <LoginLogTable />
      <FileLogTable />
      <PostLogTable />
      <CommentLogTable />
    </CenterWrapper>
  );
}

const CenterWrapper = styled(AdminCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
`;

export default Dashboard;
