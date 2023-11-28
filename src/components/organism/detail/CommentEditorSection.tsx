import {
  DefaultButton,
  DefaultTextarea,
} from '@src/components/common/defaultTag';
import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function CommentEditorSection() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {};

  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const commentRegister = register('comment', { onChange: textareaAutosize });

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Textarea {...commentRegister} />
      <ButtonWrapper>
        <DefaultButton type="submit" $color="green" $size="small">
          추가
        </DefaultButton>
      </ButtonWrapper>
    </form>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Textarea = styled(DefaultTextarea)`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  background-color: transparent;
  padding: 0 1rem 0.8rem 1rem;
  /* background-color: transparent; */
  /* border-bottom: 1px solid ${({ theme }) => theme.inputSurface}; */
`;

export default CommentEditorSection;
