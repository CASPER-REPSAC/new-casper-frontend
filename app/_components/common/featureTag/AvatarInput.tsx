import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';
import { styled } from 'styled-components';
import DefaultInput from '../defaultTag/DefaultInput';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function AvatarInput({ ...props }: Props, ref: ForwardedRef<HTMLInputElement>) {
  const uniqueId = useId();

  return (
    <AvatarLabel htmlFor={uniqueId}>
      이미지 변경하기
      <Avatar ref={ref} id={uniqueId} type="file" {...props} />
    </AvatarLabel>
  );
}

const Avatar = styled(DefaultInput)`
  display: none;
`;
const AvatarLabel = styled.label`
  width: 290px;
  height: 290px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  cursor: pointer;
`;

export default forwardRef(AvatarInput);
