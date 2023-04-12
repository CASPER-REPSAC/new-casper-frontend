import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";
import { useRecoilValue } from "recoil";
import { isDarkState } from "@src/atoms";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60vh;
`;

export default function ToastEditor() {
  const isDark = useRecoilValue(isDarkState);
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorElement = editorRef.current
      ?.getRootElement()
      .getElementsByClassName("toastui-editor-defaultUI")[0];
    if (isDark) {
      editorElement?.classList.add("toastui-editor-dark");
    } else {
      editorElement?.classList.remove("toastui-editor-dark");
    }
    console.log(editorRef.current);
    console.log(document.getElementsByClassName("ProseMirror"));
  }, [editorRef, isDark]);

  return (
    <Wrapper>
      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="100%"
        initialEditType="markdown"
        usageStatistics={false}
      />
    </Wrapper>
  );
}
