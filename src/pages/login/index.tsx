import { isDarkState } from '@src/atoms';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { ThemeContext } from 'styled-components';
import {
  Button,
  Form,
  ImageWrapper,
  Img,
  Input,
  Label,
  Row,
  Wrapper,
} from './login.style';

interface IForm {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);

  const { register, watch, handleSubmit } = useForm<IForm>();
  const theme = useContext(ThemeContext);

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
          <Input
            placeholder="ID를 입력해주세요."
            autoComplete="off"
            {...register('id', { required: true })}
          ></Input>
        </Row>

        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <Input
            placeholder="PW를 입력해주세요."
            autoComplete="off"
            type={'password'}
            {...register('pw', { required: true })}
          ></Input>
        </Row>
        <Button onClick={() => {}}>로그인</Button>
      </Form>
    </Wrapper>
  );
}
