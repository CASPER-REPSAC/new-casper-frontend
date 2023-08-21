import { isDarkState } from '@src/atoms';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { setCookie, getCookie } from '@src/Utils/Cookies';
import axios from 'axios';
import { useEffect } from 'react';
import router from 'next/router';
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
import { accessSync } from 'fs';
import { type } from 'os';

interface LoginFormProps {
  id: string;
  pw: string;
}

export default function Login() {
  const getToken = getCookie('is_login');
  const isDark = useRecoilValue(isDarkState);
  const { register, watch, handleSubmit } = useForm<LoginFormProps>();

  useEffect(() => {
    if (getToken != undefined) {
      alert('login 되었습니다.');
      router.push('/');
    }
  }, [getToken]);

  const onValid: SubmitHandler<LoginFormProps> = async (data) => {
    await axios
      .post('/api/user/login', data, {
        headers: {
          Authorization: `Bearer.${getCookie('is_login')}`,
        },
      })
      .then((Response) => {
        const APIToken = Response.data;
        setCookie('is_login', APIToken);
        location.reload();
      })
      .catch((Error) => {
        alert('Error코드 :' + Error + 'ID 혹은 비밀번호를 확인하세요');
      });
  };
  const onInvalid = () => {
    alert('입력값들을 확인해 주세요');
  };

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
        <LoginButton onClick={handleSubmit(onValid, onInvalid)}>
          로그인
        </LoginButton>
      </Form>
      <Register_link href="/login/register">
        You don&#39;t have ID?
      </Register_link>
    </Wrapper>
  );
}
