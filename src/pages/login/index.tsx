import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import {
  Form,
  ImageWrapper,
  Img,
  LoginInput,
  Label,
  Row,
  Wrapper,
  LoginButton,
} from './login.style';

interface IForm {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);

  const { register, watch, handleSubmit } = useForm<IForm>();
  // const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <ImageWrapper width="300px">
        {isDark ? (
          <Img layout="fill" src="/casper_logo_white.png" alt="logo" />
        ) : (
          <Img layout="fill" src="/casper_logo_black.png" alt="logo" />
        )}
      </ImageWrapper>

      <Form>
        <Row>
          <Label htmlFor="id">
            <AiOutlineUser size={25} />
          </Label>
          <LoginInput
            placeholder="ID를 입력해주세요."
            autoComplete="off"
            {...register('id', { required: true })}
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
            {...register('pw', { required: true })}
          ></LoginInput>
        </Row>
        <LoginButton onClick={() => {}}>로그인</LoginButton>
      </Form>
    </Wrapper>
  );
}
