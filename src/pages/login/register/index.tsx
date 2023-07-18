import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser, AiOutlineMail, AiOutlineCheckSquare } from 'react-icons/ai';
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
} from './register.style';

interface IForm {
  id: string;
  pw: string;
  email: string;
}
export default function Register() {
  const isDark = useRecoilValue(isDarkState);
  const { register, watch, handleSubmit} = useForm<IForm>();
  // const theme = useContext(ThemeContext);
  console.log(watch())
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
            {...register("pw", { required: true })}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="pw_check">
            <AiOutlineCheckSquare size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 확인해 주세요."
            autoComplete="off"
            type={'password'}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="email">
            <AiOutlineMail size={25} />
          </Label>
          <LoginInput
            placeholder="email을 입력해 주세요."
            autoComplete="off"
            {...register('email', { required: true })}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="name">
            <AiOutlineMail size={25} />
          </Label>
          <LoginInput
            placeholder="이름을 입력해 주세요."
            autoComplete="off"
            {...register('name', { required: true })}
          ></LoginInput>
        </Row>
        <LoginButton onClick={() => {}}>회원가입</LoginButton>
      </Form>
    </Wrapper>
  );
}
