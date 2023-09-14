import { TextareaHTMLAttributes } from 'react';
import { css, styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useFormContext } from 'react-hook-form';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface EditorFormData {
  content: string;
}

function VanillaEditor({ placeholder }: Props) {
  const { register, watch } = useFormContext<EditorFormData>();
  return (
    <Wrapper>
      <TextArea placeholder={placeholder} {...register('content')} />
      <MarkdownPreview>{watch('content')}</MarkdownPreview>
    </Wrapper>
  );
}

export default VanillaEditor;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  gap: 4px;
`;

const editorCss = css`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.surfacePointAlt};
  color: ${({ theme }) => theme.textDefault};
  padding: 20px;
  font-size: 1.6rem;
  width: 100%;
`;

const MarkdownPreview = styled(ReactMarkdown)`
  ${editorCss}
  overflow-y: scroll;
  pre {
    border-radius: 2px;
    padding: 0.2em 1em;
    margin: 1em 0;
    background-color: ${({ theme }) => theme.surfaceAlt};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    margin: 0.4em 0;
  }
`;
const TextArea = styled.textarea`
  ${editorCss}
  &:focus {
    outline: none;
  }
  resize: none;
`;
