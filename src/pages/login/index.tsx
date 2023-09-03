import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { isDarkState } from '@src/atoms';
import styled from 'styled-components';
import Button from '@src/components/common/DefaultButton';
import DefaultInput from '@src/components/common/DefaultInput';

interface LoginFormProps {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);
  const { register } = useForm<LoginFormProps>();
  const logoSrc = isDark ? '/casper_logo_white.png' : '/casper_logo_black.png';

  return (
    <Wrapper>
      <LogoWrapper>
        <Image src={logoSrc} alt="logo" fill />
      </LogoWrapper>

      <Form>
        <InputWrapper>
          <Label htmlFor="id">
            <AiOutlineUser size={25} />
          </Label>
          <LoginInput
            placeholder="ID를 입력해주세요."
            autoComplete="off"
            register={register('id', { required: true })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 입력해주세요."
            autoComplete="off"
            type="password"
            register={register('pw', { required: true })}
          />
        </InputWrapper>
        <LoginButton full onClick={() => {}}>
          로그인
        </LoginButton>
      </Form>

      <RegisterLink href="/login/register">You don&#39;t have ID?</RegisterLink>
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
  width: 400px;
`;
const LoginInput = styled(DefaultInput)`
  margin-bottom: 0.3em;
  padding-left: 45px;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 84px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
`;
const LoginButton = styled(Button)`
  height: 50px;
  margin-top: 1em;
`;
const RegisterLink = styled(Link)`
  margin-top: 1em;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
