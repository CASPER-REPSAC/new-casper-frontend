import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";
import { useRecoilValue } from "recoil";
import { isDarkState } from "@src/atoms";
import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  margin-bottom: 100px;
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
      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="130px"
        initialEditType="wysiwyg"
        usageStatistics={false}
        hideModeSwitch={true}
      />
      <Button
        text="작성"
        style={{ position: "absolute", right: 0, marginTop: "1em" }}
      ></Button>
    </Wrapper>
  );
}

export default ToastCommentEditor;
