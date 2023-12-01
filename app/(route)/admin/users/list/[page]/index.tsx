import BoardFooter from 'app/(route)/boards/[boardType]/list/[page]/_components/BoardFooter';
import UserListTable from 'app/(route)/admin/users/list/[page]/_components/UserListTable';
import { AdminCenterWrapper } from 'app/_components/common';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';

function UserListPage() {
  const query = useSearchParams();
  const pageQuery = Array.isArray(query.page) ? query.page[0] : query.page;
  const curPage = pageQuery ? parseInt(pageQuery, 10) : -1;
  return (
    <Wrapper>
      <UserListTable />
      <BoardFooter maxPage={10} curPage={curPage} />
    </Wrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const mockData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const paths = mockData.map((value) => {
    return {
      params: {
        page: value,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const Wrapper = styled(AdminCenterWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default UserListPage;
