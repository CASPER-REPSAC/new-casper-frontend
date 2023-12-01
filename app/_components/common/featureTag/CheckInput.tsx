import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';
import { styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function CheckInput(
  { label, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const uniqueId = useId();

  return (
    <Wrapper>
      <Input ref={ref} id={uniqueId} type="checkbox" {...props} />
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

export default forwardRef(CheckInput);
