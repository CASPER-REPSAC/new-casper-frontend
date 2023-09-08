import CommentLogTable from '@src/components/pages/admin/Dashboard/CommentLogTable';
import FileLogTable from '@src/components/pages/admin/Dashboard/FileLogTable';
import LoginLogTable from '@src/components/pages/admin/Dashboard/LoginLogTable';
import PostLogTable from '@src/components/pages/admin/Dashboard/PostLogTable';
import { styled } from 'styled-components';

function Dashboard() {
  return (
    <Wrapper>
      <LoginLogTable />
      <FileLogTable />
      <PostLogTable />
      <CommentLogTable />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 800px;
  margin: 100px auto;
  gap: 60px;
`;

export default Dashboard;
