import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'
import Button from '@src/components/Button/Button';
import Input from '@src/components/Input/Input';

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
export const LoginInput = styled(Input)`
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
export const LoginButton = styled(Button)`
  width: 400px;
  height: 50px;
`;
export const Register_link = styled(Link)`
  margin-top: 1em;
  font-size: 2rem;
  text-decoration:none;
  color:white;
  &:hover{
    cursor:pointer;
    text-decoration:underline;
  }
`;