import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';
import DefaultButton from '@src/components/Button/Button';

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
export const LoginInput = styled(motion.input)`
  margin: 0.3em;
  padding-left: 45px;
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
