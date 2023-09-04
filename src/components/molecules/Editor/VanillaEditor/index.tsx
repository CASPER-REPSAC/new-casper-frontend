import useMarkdown from '@src/hooks/useMarkdown';
import { useState } from 'react';
import { css, styled } from 'styled-components';

// interface Props {}

function VanillaEditor() {
  const [value, setValue] = useState('');
  const { markdown } = useMarkdown(value);

  return (
    <Wrapper>
      <TextArea
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <MarkdownPreview>{markdown}</MarkdownPreview>
    </Wrapper>
  );
}

export default VanillaEditor;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  gap: 4px;
`;

const editorCss = css`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.surfacePointAlt};
  color: ${({ theme }) => theme.white};

  padding: 20px;
  font-size: 2rem;
`;

const MarkdownPreview = styled.div`
  ${editorCss}
  overflow-y: scroll;
`;
const TextArea = styled.textarea`
  ${editorCss}
  &:focus {
    outline: none;
  }
  resize: none;
`;
