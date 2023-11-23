import { motion } from 'framer-motion';
import { styled, css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'red' | 'green' | 'default';

interface DefaultButtonProps {
  $size?: ButtonSize;
  $full?: boolean;
  $color?: ButtonColor;
  $active?: boolean;
}

const sizeCss = css<DefaultButtonProps>`
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: 1.4rem;
          padding: 0.2em 0.6em;
          min-height: 30px;
        `;
      case 'medium':
        return css`
          font-size: 1.6rem;
          padding: 0.4em 0.8em;
          min-height: 35px;
        `;
      case 'large':
        return css`
          font-size: 1.8rem;
          padding: 0.8em 1em;
          min-height: 40px;
        `;
      default:
        return css`
          font-size: 1.6rem;
          padding: 0.4em 0.8em;
        `;
    }
  }}
`;
const fullCss = css<DefaultButtonProps>`
  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}
`;
const inActiveColorCss = css<DefaultButtonProps>`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.notAllowedCorsor};
  color: ${({ theme }) => theme.textWeek};
`;
const activeColorCss = css<DefaultButtonProps>`
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
const colorCss = css<DefaultButtonProps>`
  ${({ $active }) => ($active ? activeColorCss : inActiveColorCss)}
`;

const DefaultButton = styled(motion.button)<DefaultButtonProps>`
  ${sizeCss};
  ${fullCss};
  ${colorCss};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

DefaultButton.defaultProps = {
  $size: 'medium',
  $color: 'default',
  $active: true,
};

export default DefaultButton;
