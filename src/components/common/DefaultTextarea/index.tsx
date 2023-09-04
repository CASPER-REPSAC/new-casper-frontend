import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import { DefaultInputStyle } from '../DefaultInput';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn;
}

function DefaultTextarea({ register, ...props }: Props) {
  return <Wrapper {...register} {...props} />;
}

export default DefaultTextarea;

const Wrapper = styled.textarea`
  ${DefaultInputStyle}
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
  resize: none;
`;
