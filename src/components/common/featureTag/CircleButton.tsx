import { css, styled } from 'styled-components';
import {
  DefaultButton,
  DefaultButtonProps,
} from '../../../../app/_components/defaultTag';

interface CircleButtonProps extends DefaultButtonProps {
  $highlight: boolean;
}

const CircleButton = styled(DefaultButton)<CircleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      background-color: ${theme.surfaceAlt};
      border: 1px solid ${theme.borderBold};
    `}
`;

export default CircleButton;
