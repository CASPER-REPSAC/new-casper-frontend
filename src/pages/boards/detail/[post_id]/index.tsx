import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PATH } from '@src/utils/urls';
import SideMenu from '@src/components/organism/BoardSideMenu';
import CommentSection from '@src/components/templates/detail/CommentSection';
import ContentSection from '@src/components/templates/detail/ContentSection';
/**
 *  글 조회 페이지
 */

function PostDetail() {
  return (
    <>
      <PageTitle pageTitle="Boards" />
      <CommonCenterWrapper>
        <SideMenu menus={PATH.boards} />
        <Main>
          <ContentSection />
          <Hr />
          <CommentSection />
        </Main>
      </CommonCenterWrapper>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.borderDefault};
  border: 0;
  width: 100%;
  height: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default PostDetail;
