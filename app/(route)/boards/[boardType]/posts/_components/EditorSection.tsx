import dynamic from 'next/dynamic';
import {
  BlockNoteEditor,
  BlockSchemaFromSpecs,
  BlockSpecs,
  InlineContentSchemaFromSpecs,
  InlineContentSpecs,
  StyleSchemaFromSpecs,
  StyleSpecs,
} from '@blocknote/core';
import { usePopup } from '@app/_hooks';
import { ERROR_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import { useFormContext } from 'react-hook-form';
import { Skeleton } from '@app/_components/common';

const BlockNote = dynamic(
  () => import('@app/_components/molecules/BlockNote'),
  {
    ssr: false,
    loading: () => <Skeleton className="h-full" />,
  },
);

function EditorSection() {
  const { setValue } = useFormContext();
  const { openAndDeletePopup } = usePopup();

  const onEditorContentChange = async (
    editor: BlockNoteEditor<
      BlockSchemaFromSpecs<BlockSpecs>,
      InlineContentSchemaFromSpecs<InlineContentSpecs>,
      StyleSchemaFromSpecs<StyleSpecs>
    >,
  ) => {
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
    <div className="h-[500px]">
      <BlockNote
        className="h-full overflow-auto"
        options={{
          onEditorContentChange,
        }}
      />
    </div>
  );
}

export default EditorSection;
