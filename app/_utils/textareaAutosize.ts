import { FormEventHandler } from 'react';

const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
  const element = e.currentTarget;
  element.style.height = 'auto';
  element.style.height = `${element.scrollHeight}px`;
};

export default textareaAutosize;
