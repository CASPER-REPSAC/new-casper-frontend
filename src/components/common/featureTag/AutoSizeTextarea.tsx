import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DefaultTextarea } from '../defaultTag';

function AutoSizeTextarea() {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const textarea = ref.current;
    textarea.style.height = `${String(textarea.scrollHeight)}px`;
  });

  return <Textarea ref={ref} />;
}

const Textarea = styled(DefaultTextarea)``;
export default AutoSizeTextarea;
