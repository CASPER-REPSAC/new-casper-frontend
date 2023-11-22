import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { BlockNoteEditor } from '@blocknote/core';
import { usePopup } from '@src/hooks';
import { ERROR_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import { useFormContext } from 'react-hook-form';

const BlockNote = dynamic(
  () => import('@src/components/molecules/editor/BlockNote'),
  {
    ssr: false,
  },
);

function EditorSection() {
  const { setValue } = useFormContext();
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
