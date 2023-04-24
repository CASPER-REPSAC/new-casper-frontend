import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";
import { useRecoilValue } from "recoil";
import { isDarkState } from "@src/atoms";
import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
`;

function ToastCommentEditor() {
  const isDark = useRecoilValue(isDarkState);
  const editorRef = useRef<Editor>(null);

  // dark mode 제어
  useEffect(() => {
    const editorElement = editorRef.current
      ?.getRootElement()
      .getElementsByClassName("toastui-editor-defaultUI")[0];
    if (isDark) {
      editorElement?.classList.add("toastui-editor-dark");
    } else {
      editorElement?.classList.remove("toastui-editor-dark");
    }
  }, [editorRef, isDark]);

  return (
    <Wrapper>
      <h1>댓글</h1>
      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="130px"
        initialEditType="wysiwyg"
        usageStatistics={false}
        hideModeSwitch={true}
      />
    </Wrapper>
  );
}

export default ToastCommentEditor;
