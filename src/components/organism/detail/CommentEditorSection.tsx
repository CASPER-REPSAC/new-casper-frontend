import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  DefaultButton,
  DefaultTextarea,
} from '@src/components/common/defaultTag';
import { PLACEHOLDER } from '@src/constants/label';
import { usePopup } from '@src/hooks';
import { POPUP_DURATION } from '@src/constants/duration';

function CommentEditorSection() {
  const { register, handleSubmit } = useForm();
  const { openAndDeletePopup } = usePopup();
  const onValid = () => {
    openAndDeletePopup({
      message: '기능 구현 중이에요.',
      duration: POPUP_DURATION.medium,
    });
  };

  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const commentRegister = register('comment', { onChange: textareaAutosize });

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Textarea
        {...commentRegister}
        placeholder={PLACEHOLDER.comment}
        rows={1}
      />
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
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  padding: 0 1rem 0.8rem 1rem;
  overflow: hidden;
`;

export default CommentEditorSection;
