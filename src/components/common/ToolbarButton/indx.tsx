import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  icon: ReactNode;
  highlight: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function ToolbarButton({ icon, highlight, onClick }: Props) {
  return (
    <Wrapper onClick={onClick} $highlight={highlight}>
      {icon}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ $highlight: boolean }>`
  ${({ $highlight, theme }) =>
    $highlight
      ? css`
          color: ${theme.toolbarActive};
        `
      : css`
          color: ${theme.toolbarDefault};
          &:hover {
            color: ${theme.toolbarHover};
          }
        `};
`;

export default ToolbarButton;
