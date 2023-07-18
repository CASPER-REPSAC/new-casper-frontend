import PageTitle from '@src/components/Layout2/PageTitle/PageTitle';
import CommonCenterWrapper from '@src/components/Layout2/CommonCenterWrapper/CommonCenterWrapper';
import SideBar from '@src/components/Layout2/SideBar/SideBar';
import Comment from '@src/components/Editor2/Comment';
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

  const sideBarParmas = {
    공지사항: '/boards/notice_board',
    '정회원 게시판': '/boards/full_member_board',
    '준회원 게시판': '/boards/associate_member_board',
  };

  return (
    <>
      <PageTitle pageTitle={'Boards'} />
      <CommonCenterWrapper>
        <SideBar menu_path={sideBarParmas} />
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
      </CommonCenterWrapper>
    </>
  );
}

export default PostDetail;
