import dynamic from 'next/dynamic';
import { styled } from 'styled-components';
import { BlockNoteEditor } from '@blocknote/core';
import { ERROR_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import usePopup from '@src/hooks/usePopup';
import { useFormContext } from 'react-hook-form';

interface Props {
  editable?: boolean;
  content: string;
}
function ContentSection({ editable = false, content }: Props) {
  const BlockNote = dynamic(
    () => import('@src/components/organism/Editor/BlockNote'),
  );
  const parsedContent = JSON.parse(content);

  const { setValue } = useFormContext();
  const { openAndDeletePopup } = usePopup();

  const onEditorContentChange = async (editor: BlockNoteEditor) => {
    try {
      const curContent = await JSON.stringify(editor.topLevelBlocks);
      setValue('content', curContent);
    } catch {
      openAndDeletePopup({
        message: ERROR_MESSAGE.unknown,
        duration: POPUP_DURATION.medium,
      });
    }
  };

  return (
    <Wrapper>
      <BlockNote
        editable={editable}
        initialContent={parsedContent}
        onEditorContentChange={onEditorContentChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 500px;
  margin-top: 20px;
`;

export default ContentSection;
