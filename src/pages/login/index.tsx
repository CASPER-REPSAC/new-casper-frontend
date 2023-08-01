import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import {
  Form,
  LoginInput,
  Label,
  Row,
  Wrapper,
  Register_link,
  LoginButton,
  LogoWrapper,
} from './login.style';
import Image from 'next/image';

interface LoginFormProps {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);

  const { register, watch, handleSubmit } = useForm<LoginFormProps>();
  // const theme = useContext(ThemeContext);
  const onValid = (data: any) => {
    const API = "http://build.casper.or.kr:5000/api/login"
      fetch(API, {
        method : 'POST',
        body : data,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res=> console.log(res))
  };
  const onInvalid = (data: any) => {alert("입력값들을 확인해 주세요")};
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
        <LoginButton onClick={handleSubmit(onValid, onInvalid)}>로그인</LoginButton>
      </Form>
      <Register_link href="/login/register">
        You don&#39;t have ID?
      </Register_link>
    </Wrapper>
  );
}
