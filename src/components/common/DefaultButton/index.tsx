import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'small' | 'medium' | 'large';
type ButtonColor = 'red' | 'green';
interface ButtonWrapperProps {
  $type: ButtonType;
  $full: boolean;
  $color: ButtonColor;
}
export interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  full?: boolean;
  color?: ButtonColor;
}

function DefaultButton({
  type = 'medium',
  full = false,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return <ButtonWrapper $type={type} $full={full} $color={color} {...props} />;
}

const sizeCss = css<ButtonWrapperProps>`
  ${({ $type }) => {
    switch ($type) {
      case 'small':
        return css`
          font-size: 1.4rem;
          padding: 0.4em 0.6em;
        `;
      case 'medium':
        return css`
          font-size: 1.6rem;
          padding: 0.4em 0.8em;
        `;
      case 'large':
        return css`
          font-size: 1.8rem;
          padding: 0.8em 1em;
        `;
      default:
        return css`
          font-size: 1.6rem;
          padding: 0.4em 0.8em;
        `;
    }
  }}
`;
const fullCss = css<ButtonWrapperProps>`
  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}
`;
const colorCss = css<ButtonWrapperProps>`
  ${({ $color }) => {
    switch ($color) {
      case 'green':
        return css`
          color: ${({ theme }) => theme.textDefault};
          background-color: ${({ theme }) => theme.greenButton};
          &:hover {
            background-color: ${({ theme }) => theme.greenHover};
          }
          &:active {
            background-color: ${({ theme }) => theme.greenActive};
          }
        `;
      case 'red':
        return css`
          background-color: ${({ theme }) => theme.redButton};
          color: ${({ theme }) => theme.textDefault};
          &:hover {
            background-color: ${({ theme }) => theme.redHover};
          }
          &:active {
            background-color: ${({ theme }) => theme.redActive};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.green100};
          &:hover {
            background-color: ${({ theme }) => theme.green200};
          }
        `;
    }
  }};
`;

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${sizeCss};
  ${fullCss};
  ${colorCss};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
`;

export default DefaultButton;
