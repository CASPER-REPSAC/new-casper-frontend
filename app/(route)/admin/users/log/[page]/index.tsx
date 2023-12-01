import UserLogTable from 'app/(route)/admin/users/log/[page]/_components/UserLogTable';
import { AdminCenterWrapper } from 'app/_components/common';
import styled from 'styled-components';

function UserLogPage() {
  return (
    <Wrapper>
      <UserLogTable />
      {/* <BoardFooter maxPage={10} curPage={curPage} /> */}
    </Wrapper>
  );
}

const Wrapper = styled(AdminCenterWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default UserLogPage;
