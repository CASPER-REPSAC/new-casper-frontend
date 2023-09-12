import { InputHTMLAttributes, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { css, styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  selected: boolean;
  label?: string;
}

function CheckBox({ register, selected, label }: Props) {
  const uniqueId = useId();

  return (
    <Wrapper>
      <OptionLabel htmlFor={uniqueId} $selected={selected}>
        {label}
      </OptionLabel>
      <CheckInput id={uniqueId} type="checkbox" {...register} />
    </Wrapper>
  );
}

export default CheckBox;

const Wrapper = styled.div``;
const OptionLabel = styled.label<{ $selected: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.textDefault};

  &::before {
    font-size: 10px;
    text-align: center;
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    line-height: 12px;
    border: 1px solid ${({ theme }) => theme.textDefault};
    border-radius: 2px;
    vertical-align: middle;
    margin-right: 5px;

    ${({ $selected, theme }) =>
      $selected &&
      css`
        content: '✔';
        background-color: ${$selected ? theme.green100 : null};
      `};
  }
`;
const CheckInput = styled.input`
  display: none;
`;
