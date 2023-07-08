import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import PageWrapper from '@src/components/Layout/PageWrapper/PageWrapper';
import SideBar from '@src/components/Layout/SideBar/SideBar';
import { useRouter } from 'next/router';
import Comment from '@src/components/Editor/Comment';
import {
  AuthorInfo,
  AuthorName,
  Avatar,
  Desc,
  H1,
  Hr,
  Info,
  Main,
} from './post_id.style';
/**
 *  글 조회 페이지
 */

function PostDetail() {
  // const router = useRouter();
  // const { post_id } = router.query;

  return (
    <PageWrapper>
      <PageTitle pageTitle={'Boards'} />
      <SideBar
        menus={['공지사항', '정회원 게시판', '준회원 게시판']}
        basePath={'/boards'}
      />
      <Main>
        {/* 본문 */}

        {/* 작성자 정보 */}
        <AuthorInfo>
          <Avatar></Avatar>
          <Info>
            <AuthorName>박지성</AuthorName>
            <Desc>소개글소개글소개글소개글소개글</Desc>
          </Info>
        </AuthorInfo>
        <Hr />

        {/* 댓글 */}
        <H1>댓글</H1>
        <Comment
          name="박지성"
          date="2021.12.12 14:12:15"
          content="댓글 1번입니다."
        ></Comment>
        <Comment
          name="박지성"
          date="2021.12.12 14:12:15"
          content="댓글 2번입니다."
        ></Comment>
      </Main>
    </PageWrapper>
  );
}

export default PostDetail;
