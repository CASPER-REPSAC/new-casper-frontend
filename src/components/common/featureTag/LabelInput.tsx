import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from 'react';
import { css, styled } from 'styled-components';
import { DefaultInput } from '@src/components/common/defaultTag';

type LabelSizeType = 'small' | 'medium' | 'large';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelSize?: LabelSizeType;
  labelIcon?: ReactNode;
  hasError?: boolean;
}

function LabelInput(
  { label, labelSize = 'small', labelIcon, hasError = false, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const uniqueId = useId();
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
          ref={ref}
          $hasIcon={hasIcon}
          $hasError={hasError}
          id={uniqueId}
          {...props}
        />
      </InputWrapper>
    </Wrapper>
  );
}

interface InputProps {
  $hasError: boolean;
  $hasIcon: boolean;
}

const Wrapper = styled.div``;
const Input = styled(DefaultInput)<InputProps>`
  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.redError};
      &:focus {
        border: 1px solid ${({ theme }) => theme.redError};
      }
    `}
  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding-left: 50px !important;
    `};
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

export default forwardRef(LabelInput);
