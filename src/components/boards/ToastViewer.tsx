import { isDarkState } from "@src/atoms";
import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import styled from "styled-components";

const Wrapper = styled.div`
  //  임시 값, 수정필요
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.4em;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div``;

const Small = styled.small`
  margin-right: 1em;
  font-size: 1.4rem;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.color2};
  border: 0;
  height: 1px;
`;

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
      <Row>
        <Item>
          <Small>박지성</Small>
          <Small>2023.01.01 18:12</Small>
          <Small>조회수: 10</Small>
        </Item>
        <Item>
          <Small>수정</Small>
          <Small>삭제</Small>
        </Item>
      </Row>
      <Hr />
      <Viewer
        theme="dark"
        ref={viewerRef}
        initialValue="<h1>제목1</h1><h2>제목2</h2><ul><li><p>1번</p></li><li><p>2번</p></li><li><p><br></p></li></ul>"
      />
    </Wrapper>
  );
}

export default ToastViewer;
