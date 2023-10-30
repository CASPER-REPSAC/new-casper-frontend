import DraftTextStyle from '@src/components/common/DraftTextStyle';
import usePopup from '@src/hooks/usePopup';
import { POPUP_DURATION, POPUP_MESSAGE } from '@src/utils/constants';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { useId, useState } from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
}
function DraftView({ content }: Props) {
  const viewEditorId = useId();
  const { openAndDeletePopup } = usePopup();
  const [editorState] = useState<EditorState>(() => {
    let initialEditorState;
    try {
      const contentState = convertFromRaw(JSON.parse(content));
      initialEditorState = EditorState.createWithContent(contentState);
    } catch (e) {
      openAndDeletePopup({
        key: Date.now(),
        message: POPUP_MESSAGE.failedToLoadDetail,
        duration: POPUP_DURATION.medium,
      });
      initialEditorState = EditorState.createEmpty();
    }
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
