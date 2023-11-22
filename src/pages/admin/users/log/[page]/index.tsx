import AdminCenterWrapper from '@src/components/common/centerWrapper/AdminCenterWrapper';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import UserLogTable from '@src/components/templates/admin/user/log/UserLogTable';
import { GetStaticPaths, GetStaticProps } from 'next';
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
