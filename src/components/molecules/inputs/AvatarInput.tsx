import DefaultInput from '@src/components/common/defaultTag/DefaultInput';
import { InputHTMLAttributes, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

function AvatarInput({ register }: Props) {
  const uniqueId = useId();

  return (
    <AvatarLabel htmlFor={uniqueId}>
      이미지 변경하기
      <Avatar id={uniqueId} register={register} type="file" />
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

export default AvatarInput;
