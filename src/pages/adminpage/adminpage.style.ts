import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'
import Button from '@src/components/Button/Button';
import Input from '@src/components/Input/Input';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width:100%;
  height:90%;
`;
export const SideBar = styled.div`
  display: flex;
  align-items: center;
  position:absolute;
  width:30%;
  height:100%;
  background-color:${({ theme }) => theme.borderDefault};
  overflow:scroll;
  // justify-content:center;
  flex-direction: column;
`;
export const SideBarRow = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  border: solid 2px #808E9B;
  width:100%;
`;
export const SideTitle = styled.h1`
  padding:0.7em;
`;
export const OpenMenu = styled.div`
  
`;