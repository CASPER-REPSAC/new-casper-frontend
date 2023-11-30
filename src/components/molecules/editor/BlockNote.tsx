'use client';

import '@blocknote/core/style.css';
import {
  Block,
  BlockNoteEditor,
  uploadToTmpFilesDotOrg_DEV_ONLY,
} from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { useBlockNoteTheme } from 'app/_hooks';

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
  const editor: BlockNoteEditor = useBlockNote(
    {
      onEditorContentChange,
      initialContent,
      editable,
      uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
    },
    [initialContent, editable],
  );
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
