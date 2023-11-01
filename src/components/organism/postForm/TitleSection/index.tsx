import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { PostReqData } from '@src/types/PostTypes';
import { PLACEHOLDER } from '@src/utils/constants';
import { KeyboardEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

interface Props {
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

function TitleSection({ onKeyDown }: Props) {
  const { register } = useFormContext<PostReqData>();

  const titleRegister = register('title', { required: true });

  return (
    <TitleInput
      labelSize="large"
      register={titleRegister}
      placeholder={PLACEHOLDER.title}
      onKeyDown={onKeyDown}
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
