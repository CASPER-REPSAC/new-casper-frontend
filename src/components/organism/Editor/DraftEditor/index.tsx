import styled from 'styled-components';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { EditorState, Editor, RichUtils, DraftBlockType } from 'draft-js';
import { useFormContext } from 'react-hook-form';
import { PostReqData } from '@src/types/PostTypes';
import ToolbarButton from '@src/components/common/ToolbarButton/indx';

import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
} from 'react-icons/lu';
import { InlineType } from '@src/types/toolbarTypes';

function DraftEditor() {
  const { setValue } = useFormContext<PostReqData>();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [inlineState, setInlineState] = useState<{
    [key in InlineType]: boolean;
  }>({
    BOLD: false,
    ITALIC: false,
  });
  const [blockState, setBlockState] = useState('unstyled');

  const inlineButtons: {
    icon: ReactNode;
    action: InlineType;
  }[] = [
    {
      icon: <LuBold size={30} />,
      action: 'BOLD',
    },
    {
      icon: <LuItalic size={30} />,
      action: 'ITALIC',
    },
  ];
  const blockButtons: {
    icon: ReactNode;
    action: string;
  }[] = [
    {
      icon: <LuHeading1 size={40} />,
      action: 'header-one',
    },
    {
      icon: <LuHeading2 size={40} />,
      action: 'header-two',
    },
    {
      icon: <LuHeading3 size={40} />,
      action: 'header-three',
    },
  ];

  const handleChange = (state: EditorState) => {
    setEditorState(state);
    setValue('content', state);
  };

  const handleInlineStyle = (e: MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    const newEditorState = RichUtils.toggleInlineStyle(
      editorState,
      inlineStyle,
    );
    setEditorState(newEditorState);
  };

  const handleBlockType = (e: MouseEvent, blockType: DraftBlockType) => {
    e.preventDefault();
    const newEditorState = RichUtils.toggleBlockType(editorState, blockType);
    setEditorState(newEditorState);
  };

  useEffect(() => {
    const currentSelection = editorState.getSelection();
    const currentKey = currentSelection.getStartKey();
    const currentBlock = editorState
      .getCurrentContent()
      .getBlockForKey(currentKey);
    const currentBlockType = currentBlock.getType();

    const bold = editorState.getCurrentInlineStyle().has('BOLD');
    const italic = editorState.getCurrentInlineStyle().has('ITALIC');

    setBlockState(currentBlockType);
    setInlineState({ BOLD: bold, ITALIC: italic });
  }, [editorState]);

  return (
    <Wrapper>
      <Toolbar>
        {blockButtons.map(({ icon, action }) => (
          <ToolbarButton
            highlight={blockState === action}
            icon={icon}
            onClick={(e) => {
              handleBlockType(e, action);
            }}
          />
        ))}

        {inlineButtons.map(({ icon, action }) => (
          <ToolbarButton
            highlight={inlineState[action]}
            icon={icon}
            onClick={(e) => {
              handleInlineStyle(e, action);
            }}
          />
        ))}
      </Toolbar>

      <Editor editorState={editorState} onChange={handleChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .DraftEditor-root {
    background-color: ${({ theme }) => theme.editorBg};
    height: 500px;
    width: 100%;
    overflow-y: auto;
  }
  .DraftEditor-editorContainer,
  .public-DraftEditor-content {
    font-size: 2.6rem;
    height: 100%;
    padding: 1rem;
  }
`;

const Toolbar = styled.div`
  display: flex;
`;

export default DraftEditor;
