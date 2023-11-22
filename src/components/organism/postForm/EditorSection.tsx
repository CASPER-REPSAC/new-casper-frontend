import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { BlockNoteEditor } from '@blocknote/core';
import { ERROR_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import { PostReqData } from '@src/types/PostTypes';
import { useFormContext } from 'react-hook-form';
import { usePopup } from '@src/hooks';

const BlockNote = dynamic(
  () => import('@src/components/molecules/editor/BlockNote'),
  {
    ssr: false,
  },
);

function EditorSection() {
  const { setValue } = useFormContext<PostReqData>();
  const { openAndDeletePopup } = usePopup();

  const onEditorContentChange = async (editor: BlockNoteEditor) => {
    try {
      const content = await JSON.stringify(editor.topLevelBlocks);
      setValue('content', content);
    } catch {
      openAndDeletePopup({
        message: ERROR_MESSAGE.unknown,
        duration: POPUP_DURATION.medium,
      });
    }
  };

  return (
    <Wrapper>
      <BlockNote onEditorContentChange={onEditorContentChange} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 500px;
  overflow: scroll;
`;

export default EditorSection;
