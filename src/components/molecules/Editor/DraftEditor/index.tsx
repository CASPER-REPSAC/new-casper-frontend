import styled from 'styled-components';
import { MouseEvent, ReactNode, useEffect, useId, useState } from 'react';
import {
  EditorState,
  Editor,
  RichUtils,
  DraftBlockType,
  convertToRaw,
} from 'draft-js';
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
import DraftTextStyle from '@src/components/common/DraftTextStyle';
import DefaultHr from '@src/components/common/DefaultHr';

function DraftEditor() {
  const editorKey = useId();
  const { setValue } = useFormContext<PostReqData>();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [blockState, setBlockState] = useState('unstyled');
  const [inlineState, setInlineState] = useState<{
    [key in InlineType]: boolean;
  }>({
    BOLD: false,
    ITALIC: false,
  });

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
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    );
    setEditorState(state);
    setValue('content', content);
  };

  const handleInlineStyle = (e: MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    e.stopPropagation();
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
            key={action}
            highlight={blockState === action}
            icon={icon}
            onClick={(e) => {
              handleBlockType(e, action);
            }}
          />
        ))}
        <Vr />
        {inlineButtons.map(({ icon, action }) => (
          <ToolbarButton
            key={action}
            highlight={inlineState[action]}
            icon={icon}
            onClick={(e) => {
              handleInlineStyle(e, action);
            }}
          />
        ))}
      </Toolbar>
      <Hr />

      <Editor
        editorKey={editorKey}
        editorState={editorState}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled(DraftTextStyle)`
  background-color: ${({ theme }) => theme.inputSurface};
  .DraftEditor-root {
    height: 500px;
  }
  padding: 1rem 4rem;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  gap: 1rem;
`;
const Hr = styled(DefaultHr)`
  margin: 1rem 0rem 3rem;
`;
const Vr = styled(DefaultHr)`
  height: 60%;
  width: 1px;
  margin: 0 1rem;
`;

export default DraftEditor;
