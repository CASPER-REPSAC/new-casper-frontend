import styled from 'styled-components';
import { BlockNoteEditor } from '@blocknote/core';
import dynamic from 'next/dynamic';
import { ERROR_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import { PostReqData } from '@src/types/PostTypes';
import { useForm } from 'react-hook-form';
import usePopup from '@src/hooks/usePopup';

const BlockNote = dynamic(
  () => import('@src/components/organism/editor/BlockNote'),
  {
    ssr: false,
  },
);

function EditorSection() {
  const { setValue } = useForm<PostReqData>();
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
