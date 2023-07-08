import styled from 'styled-components';

export const QuillWrapper = styled.div`
  .quill > .ql-container > .ql-editor.ql-blank::before {
    font-size: 2rem;
    color: ${({ theme }) => theme.color2};
  }
  .ql-container {
    font-size: 1.6rem;
    color: white;
    border: none;
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
    stroke: #aaa !important;
  }

  .ql-active .ql-stroke {
    fill: none;
    stroke: #aaa !important;
  }

  button:hover .ql-fill,
  .ql-picker-label:hover .ql-fill {
    fill: #aaa !important;
    stroke: none;
  }

  .ql-active .ql-fill {
    fill: #aaa !important;
    stroke: none;
  }
`;
