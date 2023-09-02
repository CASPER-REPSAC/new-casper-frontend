import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function QuillEditor() {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  return (
    <QuillWrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        placeholder="내용을 입력해주세요.."
      />
    </QuillWrapper>
  );
}

const QuillWrapper = styled.div`
  .quill > .ql-container > .ql-editor.ql-blank::before {
    font-size: 2rem;
    color: ${({ theme }) => theme.textWeek};
  }
  .ql-editor {
    height: 50vh;
    max-height: 500px;
    overflow: auto;
    :focus {
      border: solid 1px ${({ theme }) => theme.textWeek};
    }
  }
  .ql-container {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textDefault};
    border: none;
    padding: 0;
  }
  .ql-toolbar {
    border: none;
  }

  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: ${({ theme }) => theme.textWeek};
  }

  .ql-toolbar .ql-fill {
    fill: ${({ theme }) => theme.textWeek};
    stroke: none;
  }

  .ql-toolbar .ql-picker {
    color: ${({ theme }) => theme.textWeek};
  }

  button:hover .ql-stroke,
  .ql-picker-label:hover .ql-stroke {
    fill: none;
    stroke: ${({ theme }) => theme.textStrong} !important;
  }

  .ql-active .ql-stroke {
    fill: none;
    stroke: ${({ theme }) => theme.textStrong} !important;
  }
  .ql-active .ql-fill {
    fill: ${({ theme }) => theme.textStrong} !important;
    stroke: none;
  }
  .ql-active {
    color: ${({ theme }) => theme.textStrong} !important;
  }

  button:hover .ql-fill,
  .ql-picker-label:hover .ql-fill {
    fill: ${({ theme }) => theme.textStrong} !important;
    stroke: none;
  }

  .ql-picker-label:hover {
    color: ${({ theme }) => theme.textStrong} !important;
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

  .ql-picker-options {
    background-color: ${({ theme }) => theme.surfaceAlt};
    color: ${({ theme }) => theme.textWeek};
  }
  .ql-picker-options .ql-picker-item {
    :hover {
      color: ${({ theme }) => theme.textStrong};
    }
  }

  .ql-selected {
    color: ${({ theme }) => theme.textPoint} !important;
  }
`;

export default QuillEditor;
