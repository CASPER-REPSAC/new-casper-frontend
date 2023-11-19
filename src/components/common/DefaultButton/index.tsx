import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

// todo. full, type -> size로 통일
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'red' | 'green' | 'default';
interface ButtonWrapperProps {
  $size: ButtonSize;
  $full: boolean;
  $color: ButtonColor;
  $active?: boolean;
}
interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  full?: boolean;
  color?: ButtonColor;
  active?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

function DefaultButton({
  type = 'button',
  size = 'medium',
  full = false,
  color = 'default',
  active = true,
  ...props
}: DefaultButtonProps) {
  return (
    <ButtonWrapper
      type={type}
      $size={size}
      $full={full}
      $color={color}
      $active={active}
      {...props}
    />
  );
}

const sizeCss = css<ButtonWrapperProps>`
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: 1.4rem;
          padding: 0.2em 0.6em;
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

const inActiveColorCss = css<ButtonWrapperProps>`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.notAllowedCorsor};
  color: ${({ theme }) => theme.textWeek};
`;

const activeColorCss = css<ButtonWrapperProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.textDefault};

  ${({ $color }) => {
    switch ($color) {
      case 'green':
        return css`
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
          &:hover {
            background-color: ${({ theme }) => theme.redHover};
          }
          &:active {
            background-color: ${({ theme }) => theme.redActive};
          }
        `;

      default:
        return css`
          background-color: none;
          &:hover {
            background-color: ${({ theme }) => theme.defaultButtonHover};
          }
          &:active {
            background-color: ${({ theme }) => theme.defaultButtonActive};
          }
        `;
    }
  }};
`;
const colorCss = css<ButtonWrapperProps>`
  ${({ $active }) => ($active ? activeColorCss : inActiveColorCss)}
`;

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${sizeCss};
  ${fullCss};
  ${colorCss};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export default DefaultButton;
