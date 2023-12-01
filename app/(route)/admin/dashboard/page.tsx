import { AdminCenterWrapper } from 'app/_components/common';
import { styled } from 'styled-components';
import {
  CommentLogTable,
  FileLogTable,
  LoginLogTable,
  PostLogTable,
} from './_components';

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
