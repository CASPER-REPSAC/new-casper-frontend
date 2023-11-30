import { ForwardedRef, TextareaHTMLAttributes, forwardRef, useId } from 'react';
import { styled } from 'styled-components';
import { DefaultTextarea } from 'app/_components/common/defaultTag';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function LabelTextarea(
  { label, ...props }: Props,

  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const uniqueId = useId();

  return (
    <Wrapper>
      <Label htmlFor={uniqueId}>{label}</Label>
      <DefaultTextarea ref={ref} id={uniqueId} {...props} />
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 0.5em;
`;

export default forwardRef(LabelTextarea);
