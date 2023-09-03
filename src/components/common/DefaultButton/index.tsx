import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'small' | 'medium' | 'large';
interface ButtonWrapperProps {
  $type: ButtonType;
}
interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
}

function DefaultButton({ type = 'medium', ...props }: Props) {
  return <ButtonWrapper $type={type} {...props} />;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${({ $type }) => {
    switch ($type) {
      case 'small':
        return css`
          height: 30px;
        `;
      case 'medium':
        return css`
          height: 40px;
        `;

      case 'large':
        return css`
          height: 50px;
        `;
      default:
        return css`
          height: 40px;
        `;
    }
  }}

  width: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.green100};
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.green200};
  }
`;

export default DefaultButton;
