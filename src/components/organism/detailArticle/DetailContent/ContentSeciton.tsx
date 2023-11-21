import dynamic from 'next/dynamic';
import { BlockNoteEditor } from '@blocknote/core';
import { ERROR_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import usePopup from '@src/hooks/usePopup';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { editableState } from '@src/recoil/detailPageAtoms';

const BlockNote = dynamic(
  () => import('@src/components/organism/editor/BlockNote'),
  {
    ssr: false,
  },
);

interface Props {
  content: string;
}
function ContentSection({ content }: Props) {
  const editable = useRecoilValue(editableState);
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
    <BlockNote
      editable={editable}
      initialContent={JSON.parse(content)}
      onEditorContentChange={onEditorContentChange}
    />
  );
}

export default ContentSection;
