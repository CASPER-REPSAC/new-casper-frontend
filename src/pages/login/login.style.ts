import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';
import { DefaultButton } from '@src/components/Components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled(motion.input)`
  :focus {
    border-color: ${({ theme }) => theme.textColor};
    outline: none;
  }
  height: 50px;
  width: 400px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.color2};
  margin: 0.3em;
  color: ${(props) => props.theme.textColor};
  padding-left: 45px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

export const Img = styled(Image)`
  height: auto !important;
  position: relative !important;
`;
export const ImageWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  position: absolute;
  left: 15px;
`;
export const Button = styled(DefaultButton)`
  width: 400px;
  height: 50px;
`;
