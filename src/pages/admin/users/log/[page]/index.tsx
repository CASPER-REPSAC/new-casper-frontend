import AdminCenterWrapper from '@src/components/common/Layout/AdminCenterWrapper';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import UserLogTable from '@src/components/pages/admin/user/log/UserLogTable';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function UserLogPage() {
  const { query } = useRouter();
  const pageQuery = Array.isArray(query.page) ? query.page[0] : query.page;
  const curPage = pageQuery ? parseInt(pageQuery, 10) : -1;

  return (
    <Wrapper>
      <UserLogTable />
      <BoardFooter maxPage={10} curPage={curPage} />
    </Wrapper>
  );
}

const Wrapper = styled(AdminCenterWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default UserLogPage;
