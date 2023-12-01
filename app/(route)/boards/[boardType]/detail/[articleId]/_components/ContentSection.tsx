import dynamic from 'next/dynamic';
import { BlockNoteEditor } from '@blocknote/core';
import { ERROR_MESSAGE } from 'app/_constants/message';
import { POPUP_DURATION } from 'app/_constants/duration';
import { usePopup } from 'app/_hooks';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { editableState } from 'app/_store/detailPageAtoms';

const BlockNote = dynamic(
  () => import('app/_components/molecules/editor/BlockNote'),
  {
    ssr: false,
  },
);

interface Props {
  articleContent: string;
}
function ContentSection({ articleContent }: Props) {
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
        duration: POPUP_DURATION.short,
      });
    }
  };

  const initialContent = JSON.parse(articleContent);

  return (
    <BlockNote
      editable={editable}
      initialContent={initialContent}
      onEditorContentChange={onEditorContentChange}
    />
  );
}

export default ContentSection;