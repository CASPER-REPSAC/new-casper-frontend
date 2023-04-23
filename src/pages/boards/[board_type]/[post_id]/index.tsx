import PageTitle from "@src/components/PageTitle";
import PageWrapper from "@src/components/PageWrapper";
import SideBar from "@src/components/SideBar";
import ToastEditor from "@src/components/ToastEditor";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

/**
 *  글 조회 페이지
 */

const Viewer = dynamic(() => import("@src/components/ToastViewer"), {
  ssr: false,
});

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
      <Viewer />
    </PageWrapper>
  );
}

export default PostDetail;
