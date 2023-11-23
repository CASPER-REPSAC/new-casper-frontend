import { css, styled } from 'styled-components';
import { DefaultButton, DefaultButtonProps } from '../defaultTag';

interface CircleButtonProps extends DefaultButtonProps {
  $highlight: boolean;
}

const CircleButton = styled(DefaultButton)<CircleButtonProps>`
  border-radius: 50%;

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      background-color: ${theme.surfaceAlt};
      border: 1px solid ${theme.borderBold};
    `}
`;

export default CircleButton;
