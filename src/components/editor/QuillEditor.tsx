import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { QuillWrapper } from './QuillEditor.style';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function QuillEditor() {
  const [value, setValue] = useState('');

  return (
    <QuillWrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력해주세요.."
      />
    </QuillWrapper>
  );
}

export default QuillEditor;
