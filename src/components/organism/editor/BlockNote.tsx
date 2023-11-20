'use client';

import '@blocknote/core/style.css';
import { Block, BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import useBlockNoteTheme from '@src/hooks/useEditorTheme';
import { useEffect } from 'react';

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
    onEditorContentChange,
    initialContent,
  });
  const theme = useBlockNoteTheme(editable);

  useEffect(() => {
    editor.isEditable = editable;
  }, [editor, editable]);

  return (
    <BlockNoteView
      editor={editor}
      theme={theme}
      onClick={() => editor.focus()}
    />
  );
}

export default BlockNote;
