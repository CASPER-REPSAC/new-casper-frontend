import { css, styled } from 'styled-components';

const CircleButton = styled.button<{ $highlight: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${({ theme }) => theme.textWeek};
  font-size: 1.6rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.borderDefault};

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      background-color: ${theme.surfaceAlt};
      border: 1px solid ${theme.borderBold};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.defaultButtonHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.defaultButtonActive};
  }
`;

export default CircleButton;
