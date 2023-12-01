import UserLogTable from 'app/(route)/admin/users/log/[page]/_components/UserLogTable';
import { AdminCenterWrapper } from 'app/_components/common';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';

function UserLogPage() {
  return (
    <Wrapper>
      <UserLogTable />
      {/* <BoardFooter maxPage={10} curPage={curPage} /> */}
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

export default UserLogPage;
