import { UseFormRegisterReturn } from 'react-hook-form';
import { styled, css } from 'styled-components';

interface Props {
  label: string;
  value: string;
  register?: UseFormRegisterReturn;
  checked: boolean;
}

function RadioInput({ label, value, register, checked }: Props) {
  return (
    <Wrapper $checked={checked}>
      <StyledRadioInput type="radio" value={value} {...register} />
      {label}
    </Wrapper>
  );
}

const Wrapper = styled.label<{ $checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  border-radius: 4px;
  cursor: pointer;
  ${({ theme, $checked }) =>
    $checked &&
    css`
      background-color: ${theme.purple};
    `}
`;
const StyledRadioInput = styled.input`
  display: none;
`;

export default RadioInput;
