import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { isDarkState } from '@src/atoms';
import styled from 'styled-components';
import Button from '@src/components/common/Button';
import Input from '@src/components/common/Input';

interface LoginFormProps {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);
  const { register } = useForm<LoginFormProps>();

  return (
    <Wrapper>
      <LogoWrapper>
        {isDark ? (
          <Image src="/casper_logo_white.png" alt="logo" fill={true} />
        ) : (
          <Image src="/casper_logo_black.png" alt="logo" fill={true} />
        )}
      </LogoWrapper>

      <Form>
        <Row>
          <Label htmlFor="id">
            <AiOutlineUser size={25} />
          </Label>
          <LoginInput
            placeholder="ID를 입력해주세요."
            autoComplete="off"
            register={register('id', { required: true })}
          ></LoginInput>
        </Row>

        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 입력해주세요."
            autoComplete="off"
            type={'password'}
            register={register('pw', { required: true })}
          ></LoginInput>
        </Row>
        <LoginButton onClick={() => {}}>로그인</LoginButton>
      </Form>

      <Register_link href="/login/register">
        You don&#39;t have ID?
      </Register_link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginInput = styled(Input)`
  margin: 0.3em;
  padding-left: 45px;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 84px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
`;
const LoginButton = styled(Button)`
  width: 400px;
  height: 50px;
`;
const Register_link = styled(Link)`
  margin-top: 1em;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
