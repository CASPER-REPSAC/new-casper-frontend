import { InputHTMLAttributes, ReactNode, useId } from 'react';
import { css, styled } from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import DefaultInput from '../../common/DefaultInput';

/* id, labelIcon, placeholder, register, errorMessgae */

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelIcon: ReactNode;
  register: UseFormRegisterReturn;
  placeholder: string;
  errorMessage: string | undefined;
}

export default function LoginInput({
  label,
  labelIcon,
  register,
  errorMessage,
  ...props
}: Props) {
  const uniqueId = useId();
  const hasError = !!errorMessage;

  return (
    <Wrapper>
      <Label htmlFor={uniqueId}>{label}</Label>
      <InputWrapper>
        <Icon>{labelIcon}</Icon>
        <Input
          $hasError={hasError}
          id={uniqueId}
          register={register}
          {...props}
        />
      </InputWrapper>
      <InputErrors $visible={hasError}>{errorMessage}</InputErrors>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Input = styled(DefaultInput)<{ $hasError: boolean }>`
  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.red};
    `}
  padding-left: 45px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 0.5em;
`;
const Icon = styled.div`
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
  color: ${({ theme }) => theme.red};
  font-size: 1.5rem;
  text-align: end;
`;
