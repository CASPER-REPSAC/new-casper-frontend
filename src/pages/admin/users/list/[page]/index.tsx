import AdminCenterWrapper from '@src/components/common/Layout/AdminCenterWrapper';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import UserListTable from '@src/components/pages/admin/user/list/UserListTable';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function UserListPage() {
  const { query } = useRouter();
  const pageQuery = Array.isArray(query.page) ? query.page[0] : query.page;
  const curPage = pageQuery ? parseInt(pageQuery, 10) : -1;
  return (
    <Wrapper>
      <UserListTable />
      <BoardFooter maxPage={10} curPage={curPage} />
    </Wrapper>
  );
}

const Wrapper = styled(AdminCenterWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default UserListPage;
