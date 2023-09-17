import { InputHTMLAttributes, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
}

function CheckInput({ register, label, ...props }: Props) {
  const uniqueId = useId();

  return (
    <Wrapper>
      <Input id={uniqueId} type="checkbox" {...register} {...props} />
      {label && <Label htmlFor={uniqueId}>{label}</Label>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const Label = styled.label`
  cursor: pointer;
  font-size: 1.4rem;
`;
const Input = styled.input`
  cursor: pointer;
`;

export default CheckInput;
