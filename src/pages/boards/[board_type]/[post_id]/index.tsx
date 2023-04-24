import PageTitle from "@src/components/PageTitle";
import PageWrapper from "@src/components/PageWrapper";
import SideBar from "@src/components/SideBar";
import ToastEditor from "@src/components/ToastEditor";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";

import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
/**
 *  글 조회 페이지
 */

const Viewer = dynamic(() => import("@src/components/ToastViewer"), {
  ssr: false,
});
const CommentEditor = dynamic(
  () => import("@src/components/ToastCommentEditor"),
  {
    ssr: false,
  }
);

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.color2};
  border: 0;
  width: 100%;
  height: 1px;
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
        <Viewer />
        <Hr />
        <CommentEditor></CommentEditor>
      </Main>
    </PageWrapper>
  );
}

export default PostDetail;
