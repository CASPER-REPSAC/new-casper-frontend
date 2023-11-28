import { KeyboardEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';
import { PLACEHOLDER } from '@src/constants/label';
import { PostReqData } from '@src/types/PostTypes';
import { LabelInput } from '@src/components/common/featureTag';

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
      labelSize="large"
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
