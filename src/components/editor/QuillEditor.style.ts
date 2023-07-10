import styled from 'styled-components';

export const QuillWrapper = styled.div`
  .quill > .ql-container > .ql-editor.ql-blank::before {
    font-size: 2rem;
    color: ${({ theme }) => theme.color2};
  }

  .ql-editor {
    height: 500px;
    max-height: 500px;
    overflow: auto;
  }

  .ql-container {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColor};
    border: none;
    padding: 0;
  }
  .ql-toolbar {
    border: none;
  }

  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: ${({ theme }) => theme.color2};
  }

  .ql-toolbar .ql-fill {
    fill: ${({ theme }) => theme.color2};
    stroke: none;
  }

  .ql-toolbar .ql-picker {
    color: ${({ theme }) => theme.color2};
  }

  button:hover .ql-stroke,
  .ql-picker-label:hover .ql-stroke {
    fill: none;
    stroke: ${({ theme }) => theme.textColor} !important;
  }

  .ql-active .ql-stroke {
    fill: none;
    stroke: ${({ theme }) => theme.textColor} !important;
  }
  .ql-active .ql-fill {
    fill: ${({ theme }) => theme.textColor} !important;
    stroke: none;
  }
  .ql-active {
    color: ${({ theme }) => theme.textColor} !important;
  }

  button:hover .ql-fill,
  .ql-picker-label:hover .ql-fill {
    fill: ${({ theme }) => theme.textColor} !important;
    stroke: none;
  }

  .ql-picker-label:hover {
    color: ${({ theme }) => theme.textColor} !important;
    border: none;
    transform: none;
    scale: 1;
  }
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border: none;
  }

  .ql-toolbar.ql-snow .ql-picker-label {
    border: none;
  }
`;
