import dynamic from 'next/dynamic';
import { BlockNoteEditor } from '@blocknote/core';
import { ERROR_MESSAGE } from 'app/_constants/message';
import { POPUP_DURATION } from 'app/_constants/duration';
import { usePopup } from 'app/_hooks';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { editableState } from 'app/_store/detailPageAtoms';
import { Skeleton } from 'app/_components/common';

const BlockNote = dynamic(() => import('app/_components/molecules/BlockNote'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full flex-col gap-4 px-12 pt-4">
      <Skeleton className="h-4 w-full rounded-full" />
      <Skeleton className="h-4 w-1/3 rounded-full" />
      <Skeleton className="h-4 w-1/2 rounded-full" />
    </div>
  ),
});

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
    <div className="mb-40 min-h-[300px]">
      <BlockNote
        editable={editable}
        initialContent={initialContent}
        onEditorContentChange={onEditorContentChange}
      />
    </div>
  );
}

export default ContentSection;
