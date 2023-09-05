import { InputHTMLAttributes, ReactNode, useId } from 'react';
import { css, styled } from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import DefaultInput from '../../../common/DefaultInput';

type LabelSizeType = 'small' | 'medium' | 'large';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelSize?: LabelSizeType;
  register: UseFormRegisterReturn;
  labelIcon?: ReactNode;
  errorMessage?: string | undefined;
}

function LabelInput({
  label,
  labelSize = 'small',
  labelIcon,
  register,
  errorMessage,
  ...props
}: Props) {
  const uniqueId = useId();
  const hasError = !!errorMessage;
  const hasIcon = !!labelIcon;

  return (
    <Wrapper>
      {label && (
        <Label $size={labelSize} htmlFor={uniqueId}>
          {label}
        </Label>
      )}
      <InputWrapper>
        {labelIcon && <Icon>{labelIcon}</Icon>}
        <Input
          $hasIcon={hasIcon}
          $hasError={hasError}
          id={uniqueId}
          register={register}
          {...props}
        />
      </InputWrapper>
    </Wrapper>
  );
}
export default LabelInput;

interface InputProps {
  $hasError: boolean;
  $hasIcon: boolean;
}

const Wrapper = styled.div``;
const Input = styled(DefaultInput)<InputProps>`
  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.red};
    `}
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '50px' : 'none')};
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.label<{ $size: LabelSizeType }>`
  font-size: ${({ $size }) => $size === 'small' && '1.4rem'};
  font-size: ${({ $size }) => $size === 'medium' && '1.6rem'};
  font-size: ${({ $size }) => $size === 'large' && '1.8rem'};

  display: inline-block;

  margin-bottom: 0.5em;
`;
const Icon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;