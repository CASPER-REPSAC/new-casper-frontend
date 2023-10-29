import DraftTextStyle from '@src/components/common/DraftTextStyle';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { useId, useState } from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
}
function DraftView({ content }: Props) {
  const viewEditorId = useId();
  const [editorState] = useState<EditorState>(() => {
    const contentState = convertFromRaw(JSON.parse(content));
    const initialEditorState = EditorState.createWithContent(contentState);
    return initialEditorState;
  });

  const none = () => {};

  return (
    <Wrapper>
      <Editor
        editorKey={viewEditorId}
        editorState={editorState}
        onChange={none}
        readOnly
      />
    </Wrapper>
  );
}

const Wrapper = styled(DraftTextStyle)``;

export default DraftView;
