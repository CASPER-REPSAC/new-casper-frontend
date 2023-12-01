import styled from 'styled-components';
import { DefaultInputStyle } from './DefaultInput';

const DefaultTextarea = styled.textarea.attrs(() => ({
  spellCheck: false,
}))`
  ${DefaultInputStyle};
  height: auto;
  resize: none;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
`;

export default DefaultTextarea;
