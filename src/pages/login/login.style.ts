import styled from 'styled-components';
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

export const LogoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 84px;
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
