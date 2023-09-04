import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'small' | 'medium' | 'large';
interface ButtonWrapperProps {
  $type: ButtonType;
  $full: boolean;
}
interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  full?: boolean;
}

function DefaultButton({ type = 'medium', full = false, ...props }: Props) {
  return <ButtonWrapper $type={type} $full={full} {...props} />;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${({ $type }) => {
    switch ($type) {
      case 'small':
        return css`
          width: 80px;
          height: 30px;
        `;
      case 'medium':
        return css`
          width: 100px;
          height: 40px;
        `;

      case 'large':
        return css`
          width: 120px;
          height: 50px;
        `;
      default:
        return css`
          width: 100px;
          height: 40px;
        `;
    }
  }}
  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.green100};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.green200};
  }
`;

export default DefaultButton;
