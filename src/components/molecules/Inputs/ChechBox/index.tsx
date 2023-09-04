import { InputHTMLAttributes, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  selected: boolean;
}

function CheckBox({ register, selected, value }: Props) {
  const uniqueId = useId();
  return (
    <OptionLabel htmlFor={uniqueId} $selected={selected}>
      <CheckInput id={uniqueId} type="checkbox" value={value} {...register} />
      <span>고정글</span>
    </OptionLabel>
  );
}

export default CheckBox;

const OptionLabel = styled.label<{ $selected: boolean }>`
  height: 50px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$selected ? props.theme.textWeek : props.theme.textStrong};
  border: 1px solid
    ${(props) =>
      props.$selected ? props.theme.borderDefault : props.theme.borderDefault};
  background-color: ${(props) =>
    props.$selected ? props.theme.surfacePointDefault : null};
  :hover {
    color: ${({ theme }) => theme.textStrong};
    border: 1px solid ${(props) => props.theme.borderBold};
  }
`;
const CheckInput = styled.input`
  display: none;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  width: 20px;
  height: 20px;
  color: #000;
  cursor: pointer;
`;
