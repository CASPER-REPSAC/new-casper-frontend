'use client';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';

import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import { Block, PartialBlock } from '@blocknote/core';
import { useTheme } from '@app/_hooks';

interface Props {
  editable?: boolean;
  initialContent?: PartialBlock[];
  onEditorChange: (blocks: Block[]) => void;
}

function BlockNote({ editable = true, onEditorChange, initialContent }: Props) {
  const editor = useCreateBlockNote({ initialContent });
  const { theme } = useTheme();

  return (
    <div className="h-full cursor-text  [&_.bn-container]:h-full  [&_.bn-editor]:bg-inherit  [&_.bn-editor]:p-0">
      <BlockNoteView
        sideMenu={false}
        editor={editor}
        editable={editable}
        theme={theme}
        onChange={() => {
          const allBlocks: Block[] = editor.document;
          onEditorChange(allBlocks);
        }}
        onClick={() => editor.focus()}
      />
    </div>
  );
}

export default BlockNote;
