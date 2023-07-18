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
  LoginButton,
  LogoWrapper,
} from './login.style';
import Image from 'next/image';

export interface LoginFormProps {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);

  const { register, watch, handleSubmit } = useForm<LoginFormProps>();
  // const theme = useContext(ThemeContext);

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
    </Wrapper>
  );
}
