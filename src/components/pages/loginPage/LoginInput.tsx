import { InputHTMLAttributes, ReactNode, useId } from 'react';
import { styled } from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import DefaultInput from '../../common/DefaultInput';

/* id, labelIcon, placeholder, register, errorMessgae */

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelIcon: ReactNode;
  register: UseFormRegisterReturn;
  placeholder: string;
  errorMessage: string | undefined;
}

export default function LoginInput({
  labelIcon,
  register,
  errorMessage,
  ...props
}: Props) {
  const uniqueId = useId();
  const hasError = !!errorMessage;

  return (
    <Wrapper>
      <InputWrapper>
        <Label htmlFor={uniqueId}>{labelIcon}</Label>
        <Input register={register} {...props} />
      </InputWrapper>
      <InputErrors $visible={hasError}>{errorMessage}</InputErrors>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Input = styled(DefaultInput)`
  background-color: transparent;
  padding-left: 45px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const InputErrors = styled.div<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  height: 30px;
  line-height: 30px;
  color: red;
  font-size: 1.5rem;
`;
