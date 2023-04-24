import PageTitle from "@src/components/PageTitle";
import PageWrapper from "@src/components/PageWrapper";
import SideBar from "@src/components/SideBar";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";

import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import Comment from "@src/components/boards/Comment";
/**
 *  글 조회 페이지
 */

const Viewer = dynamic(() => import("@src/components/boards/ToastViewer"), {
  ssr: false,
});
const CommentEditor = dynamic(
  () => import("@src/components/boards/ToastCommentEditor"),
  {
    ssr: false,
  }
);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.color2};
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
  background-color: ${({ theme }) => theme.color1};
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

function PostDetail() {
  const router = useRouter();
  const { post_id } = router.query;

  return (
    <PageWrapper>
      <PageTitle pageTitle={"Boards"} />
      <SideBar
        menus={["공지사항", "정회원 게시판", "준회원 게시판"]}
        basePath={"/boards"}
      />
      <Main>
        {/* 본문 */}
        <Viewer />

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
        <CommentEditor></CommentEditor>
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
