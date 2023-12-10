'use client';

import '@blocknote/core/style.css';
import {
  Block,
  BlockNoteEditor,
  uploadToTmpFilesDotOrg_DEV_ONLY,
} from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { useBlockNoteTheme } from 'app/_hooks';
import { useEffect } from 'react';

interface Props {
  initialContent?: Block[];
  className?: string;

  editable?: boolean;
  onEditorContentChange?: (editor: BlockNoteEditor) => void;
}

function BlockNote({
  className: additionalClassName = '',
  editable = true,
  onEditorContentChange,
  initialContent,
}: Props) {
  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange,
    initialContent,
    editable,
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
  });
  const theme = useBlockNoteTheme(editable);

  useEffect(() => {
    editor.isEditable = editable;
  }, [editable, editor]);

  return (
    <BlockNoteView
      className={`${
        editable ? 'input p-0' : 'bg-transparent'
      }  h-full cursor-text rounded py-4 ${additionalClassName}`}
      editor={editor}
      theme={theme}
      onClick={() => editor.focus()}
    />
  );
}

export default BlockNote;
