'use client';

import '@blocknote/core/style.css';
import {
  BlockNoteEditorOptions,
  BlockSpecs,
  InlineContentSpecs,
  StyleSpecs,
  uploadToTmpFilesDotOrg_DEV_ONLY,
} from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { useBlockNoteTheme } from 'app/_hooks';
import { useEffect } from 'react';

interface Props {
  className?: string;
  options: Partial<
    BlockNoteEditorOptions<BlockSpecs, InlineContentSpecs, StyleSpecs>
  >;
}

function BlockNote({
  className: additionalClassName = '',
  options: { editable = true, onEditorContentChange, initialContent },
}: Props) {
  const editor = useBlockNote({
    onEditorContentChange,
    initialContent,
    editable,
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
  });
  const theme = useBlockNoteTheme(editable);

  useEffect(() => {
    console.log(editable);
    editor.isEditable = editable;
  }, [editable, editor]);

  return (
    <BlockNoteView
      className={`${
        editable ? 'input p-0' : 'bg-transparent'
      }   cursor-text rounded py-4 ${additionalClassName}`}
      editor={editor}
      theme={theme}
      onClick={() => editor.focus()}
    />
  );
}

export default BlockNote;
