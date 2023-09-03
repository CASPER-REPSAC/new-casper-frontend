import { TextareaHTMLAttributes, useId } from 'react';
import { styled } from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import DefaultTextarea from '@src/components/common/DefaultTextarea';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  register: UseFormRegisterReturn;
}

export default function LabelTextarea({ label, register, ...props }: Props) {
  const uniqueId = useId();

  return (
    <Wrapper>
      <Label htmlFor={uniqueId}>{label}</Label>
      <DefaultTextarea id={uniqueId} register={register} {...props} />
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 0.5em;
`;
