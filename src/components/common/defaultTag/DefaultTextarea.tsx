import styled from 'styled-components';
import { DefaultInputStyle } from './DefaultInput';

const DefaultTextarea = styled.textarea.attrs(() => ({
  spellCheck: false,
}))`
  ${DefaultInputStyle}
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
  resize: none;
`;

export default DefaultTextarea;
