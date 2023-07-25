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