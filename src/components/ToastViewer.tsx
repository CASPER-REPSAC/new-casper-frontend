import { isDarkState } from "@src/atoms";
import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import styled from "styled-components";

const Wrapper = styled.div`
  //  임시 값, 수정필요
  padding-left: 300px;
  padding-right: 300px;
`;
const Title = styled.h1``;

function ToastViewer() {
  const isDark = useRecoilValue(isDarkState);
  const viewerRef = useRef<Viewer>(null);

  // dark mode 제어
  useEffect(() => {
    const viewerElement = viewerRef.current?.getRootElement();
    if (isDark) {
      viewerElement?.classList.add("toastui-editor-dark");
    } else {
      viewerElement?.classList.remove("toastui-editor-dark");
    }
  }, [viewerRef, isDark]);

  return (
    <Wrapper>
      <Title>제목입니다.</Title>

      <Viewer
        theme="dark"
        ref={viewerRef}
        initialValue="<h1>제목1</h1><h2>제목2</h2><ul><li><p>1번</p></li><li><p>2번</p></li><li><p><br></p></li></ul>"
      />
    </Wrapper>
  );
}

export default ToastViewer;
