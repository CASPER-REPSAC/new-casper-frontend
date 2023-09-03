import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import Comment from '@src/components/molecules/Editor/Comment';
import PATH from '@src/utils/urls';
import SideMenu from '@src/components/common/SideMenu';
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
          {/* 본문 */}
          <Title>test</Title>
          {/* 작성자 정보 */}
          <AuthorInfo>
            <Avatar />
            <Info>
              <AuthorName>contentData.title</AuthorName>
              <Desc>contentData.content</Desc>
            </Info>
          </AuthorInfo>
          <Hr />

          {/* 댓글 */}
          <H1>댓글</H1>
          <Comment
            name="박지성"
            date="2021.12.12 14:12:15"
            content="댓글 1번입니다."
          />
          <Comment
            name="박지성"
            date="2021.12.12 14:12:15"
            content="댓글 2번입니다."
          />
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
const AuthorInfo = styled.div`
  display: flex;
  margin-top: 200px;
  align-items: center;
`;
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.borderDefault};
  margin-right: 50px;
`;
const Info = styled.div`
  display: flex;

  flex-direction: column;
`;
const AuthorName = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  font-size: 2rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1em;
`;
const Title = styled.h1`
  font-size: 600%;
`;

export default PostDetail;
