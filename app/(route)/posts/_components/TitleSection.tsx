import { KeyboardEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';
import { PLACEHOLDER } from 'app/_constants/label';
import { PostReqData } from 'app/_types/PostTypes';
import { LabelInput } from 'app/_components/common';

function TitleSection() {
  const { register } = useFormContext<PostReqData>();

  const titleRegister = register('title', { required: true });

  const preventSubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <TitleInput
      {...titleRegister}
      placeholder={PLACEHOLDER.title}
      onKeyDown={preventSubmit}
    />
  );
}

const TitleInput = styled(LabelInput)`
  border: 0;
  width: 100%;
  font-size: 3rem;
  height: 40px;
  &::placeholder {
    font-style: italic;
  }
  padding: 1em 4rem;
`;

export default TitleSection;
