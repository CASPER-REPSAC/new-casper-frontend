import { css } from 'styled-components';
import { DefaultButtonProps } from './interface';

export const sizeCss = css<DefaultButtonProps>`
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: 1.4rem;
          padding: 0.2em 0.6em;
          min-height: 30px;
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
          min-height: 35px;
        `;
    }
  }}
`;

export const fullCss = css<DefaultButtonProps>`
  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}
`;

export const inActiveColorCss = css<DefaultButtonProps>`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.notAllowedCorsor};
  color: ${({ theme }) => theme.textWeek};
`;

export const activeColorCss = css<DefaultButtonProps>`
  ${({ $color, theme }) => {
    switch ($color) {
      case 'green':
        return css`
          background-color: ${theme.greenButton};
        `;
      case 'red':
        return css`
          background-color: ${theme.redButton};
        `;
      default:
        return css`
          background-color: none;
        `;
    }
  }};
`;
