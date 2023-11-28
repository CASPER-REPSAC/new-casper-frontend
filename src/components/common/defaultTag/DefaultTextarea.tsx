import styled from 'styled-components';
import { DefaultInputStyle } from './DefaultInput';

const DefaultTextarea = styled.textarea.attrs(() => ({
  spellCheck: false,
  rows: 1,
}))`
  ${DefaultInputStyle};
  height: auto;
  resize: none;
`;

export default DefaultTextarea;
