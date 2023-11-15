'use client';

import { Block, BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import '@blocknote/core/style.css';
import useBlockNoteTheme from '@src/hooks/useEditorTheme';

interface Props {
  initialContent?: Block[];
  editable?: boolean;
  onEditorContentChange?: (editor: BlockNoteEditor) => void;
}

function BlockNote({
  editable = true,
  onEditorContentChange,
  initialContent,
}: Props) {
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    onEditorContentChange,
    initialContent,
  });

  const theme = useBlockNoteTheme(editable);

  return (
    <BlockNoteView
      editor={editor}
      theme={theme}
      onClick={() => editor.focus()}
    />
  );
}

export default BlockNote;
