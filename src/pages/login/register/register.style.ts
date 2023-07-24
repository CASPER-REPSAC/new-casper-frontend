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
export const Pwfalse = styled.p`
  color: red;
  font-size:110%;
`;
export const Imglabel = styled.label`
  height:200px;
  margin-bottom:0.9em;
`;
export const Imgicon = styled.div`
  position:absolute;
  right:20%;
  width:40px;
  height:40px;
  display: flex;
  align-items: center;
  border:solid 2px #485460;
  transform: translate(0, -100%);
  border-radius:50%;
  justify-content: center;
  &:hover{
    background-color:#485460;
  }
`;
export const Preimg = styled.img`
  width:200px;
  height: 200px;
  border-radius:50%;
  border:solid 2px white;
`;
export const Imginput = styled.input`
  display:none;
`;
export const Profilelabel = styled.p`
  font-size:130%;
`;